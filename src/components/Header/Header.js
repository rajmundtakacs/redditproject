import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

const Header = ({ onSearch }) => {
    return (
        <div className={styles.header}>

            <div className={styles.title}>
                <h1>Reddit</h1>
            </div>

            <div className={styles.searchbar}>
                <SearchBar onSearch={onSearch} />
            </div>
    
        </div>
    )
}

export default Header;