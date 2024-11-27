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
        }, 1000);
    
        return () => clearTimeout(delayDebounceFn);
    }, [query, onSearch]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSearch(query);    
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input} 
            type="text" 
            placeholder={placeholderText} 
            value={query}
            onChange={handleChange}
            data-testid='search-bar'
            />
        </form>
    )
}

export default SearchBar;