import React, {useState} from 'react';

function App ()  {


    const [add, setAdd] = useState('');

    const [user, setUser] = useState([]);

    function handleChange(event) {
        setAdd(event.target.value);
    }

    function dobavit (){
        setUser([...user, add])
        setAdd('')
    }

    function change (id) {
        const massiv = [ ...user ]
        massiv[id] = add;
        setUser(massiv);
        setAdd('')
    }



    return (
        <div className="App">
            <input className="App-Input" onChange={
                (event) => {
                    handleChange(event);
                } }
                   value={ add } type="text" placeholder="Enter username" />
            <button
               disabled={!add} onClick={dobavit} type="button">Добавить</button>
            {
                user.length > 0 ? (user.map((element, id ) =>
                    (<div  key={ id }>
                        <p>{element}</p>
                        <button onClick={()=> {
                            change(id)
                        }}
                                disabled={!add}>Поменять</button>
                    </div>))): (<p>список пуст</p>)
            }
        </div>
    )


}

export default App;


















