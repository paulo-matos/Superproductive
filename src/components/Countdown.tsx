import { useState, useEffect, Fragment } from 'react'; //useEffect hook: when something happens, trigger other things to happen too
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    //padstart verifies is the string has X characters and if not it fills with Y to the left - '5' becomes '05'

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout); //clears the timeout event - pure JS - so it REALLY stops the timer
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => { //generates "collateral effects"
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => { //setInterval not used because this way is easier to manage
                setTime(time - 1);
            }, 1000) //setTimeout: something will happen after one second
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]) //dependency array of useEffect - every time 'isActive' or 'time' value changes, the function is executed

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Finished cycle
                </button>
            ) : (
                    // fragment - div not shown, just because it should be encapsulated
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`} //to use more than one class - it returns a String
                                onClick={resetCountdown}
                            >
                                Stop Cycle
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Start Cycle
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}