import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Win 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>New challenge</strong>
                        <p>Get up and go get some water</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Failed
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Nailed it
                        </button>
                    </footer>

                </div>
            ) : (<div className={styles.challengeNotActive}>
                <strong>Finish a cycle to get a challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                     Gain levels by completing challenges!
                </p>
            </div>)}
        </div>
    )
}