import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = ({user}) => {
    return (
        <div className={styles.error}>
            ERROR!!! {user.name} {user.lastname}
        </div>
    );
};

export default ErrorPage;