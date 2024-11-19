import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
    return (
        <div className={styles.header}>

            <div className={styles.title}>
                <Link to='/' className={styles.logolink} >Reddit</Link>
            </div>

            <div className={styles.searchbar}>
                <SearchBar onSearch={onSearch} />
            </div>
    
        </div>
    )
}

export default Header;