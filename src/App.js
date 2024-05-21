import React, {useEffect, useState} from 'react';
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


const App = () => {

    const [pr, setPr] = useState({
        name: '', lastname: ''
    });

    useEffect(() => {
        const nameLol = prompt('What is your name?');
        const lastnameLol = prompt('What is your last name?');
        if (
            nameLol !== null && lastnameLol !== null
        ){
            setPr (
                {name: nameLol, lastname: lastnameLol}
            )
        }

    }, []);


     if (
         pr.name === 'John' && pr.lastname === 'Johns'
     )

     {
         return <MainPage user={pr}/>

     } else {
         return <ErrorPage user={pr}/>
     }



};

export default App;