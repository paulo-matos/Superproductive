import { useState, useEffect } from 'react'; //useEffect hook: when something happens, trigger other things to happen too
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    //padstart verifies is the string has X characters and if not it fills with Y to the left - '5' becomes '05'

    function startCountdown() {
        setActive(true);
    }

    useEffect(()=>{
        if (active && time > 0){
            setTimeout(()=>{ //setInterval not used because this way is easier to manage
                setTime(time - 1);
            },1000) //setTimeout: something will happen after one second
        }
    },[active, time]) //dependency array of useEffect - every time 'active' or 'time' value changes, the function is executed

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

            <button
                type="button"
                className={styles.CountdownButton}
                onClick={startCountdown}
            >
                Start Cycle
            </button>
        </div>
    );
}