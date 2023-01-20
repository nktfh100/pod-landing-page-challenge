import { useCallback, useState } from "react"
import styles from "./EmailInput.module.scss"

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export default function EmailInput() {

    const [inputValue, setInputValue] = useState("");
    const [errorShown, setErrorShown] = useState(false);

    const handleBtnClick = useCallback(() => {
        setErrorShown(!emailRegex.test(inputValue));
    }, [inputValue]);

    return (
        <div className={styles['input-container']}>
            <form onSubmit={(e) => e.preventDefault()} className={styles['input-form']}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="email" name="Request access" id="email" placeholder="Email address" />
                <button onClick={handleBtnClick} type="submit">Request Access</button>
            </form>
            <p style={{ opacity: errorShown ? "1" : "0" }} className={styles['error']}>Oops! Thats not a valid email</p>
        </div>
    )
}