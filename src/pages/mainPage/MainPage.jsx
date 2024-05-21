import React from 'react';
import style from './MainPage.module.css';

const MainPage = ({user}) => {
    return (
        <div className={style.module}>
           Добро пожаловать! {user.name} {user.lastname} мы тебя ждали!
        </div>
    );
};

export default MainPage;