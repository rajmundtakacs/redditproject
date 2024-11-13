import { React, useState, useEffect } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {

    const [placeholderText, setPlaceholderText] = useState("_");
    const [query, setQuery] = useState("");

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            setPlaceholderText((prev) => (prev === "_" ? "" : "_"));
        }, 500); 

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearch(query);
        }, 500);
    
        return () => clearTimeout(delayDebounceFn);
    }, [query, onSearch]);

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    }

    return (
        <form>
            <input className={styles.input} 
            type="text" 
            placeholder={placeholderText} 
            value={query}
            onChange={handleChange}
            />
        </form>
    )
}

export default SearchBar;