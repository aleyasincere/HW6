import React from 'react';

const ErrorPage = ({user}) => {
    return (
        <div>
            ошибка!!!!! {user.name} {user.lastname}
        </div>
    );
};

export default ErrorPage;