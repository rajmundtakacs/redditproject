import { React, useState, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    const [placeholderText, setPlaceholderText] = useState("_");

    useEffect(() => {
        // Set up an interval to alternate the placeholder text between "_" and ""
        const intervalId = setInterval(() => {
            setPlaceholderText((prev) => (prev === "_" ? "" : "_"));
        }, 500); // 500ms interval for blinking

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <form>
            <input className={styles.input} type="text" placeholder={placeholderText} />
        </form>
    )
}

export default SearchBar;