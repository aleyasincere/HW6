import React from 'react';
import {useForm} from "react-hook-form";
import {useState} from "react";


function UsersPage() {
    const [username, setUsername] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const [massiv, setMassiv] = useState([])
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}
    } = useForm()

    function submit (values) {
        console.log(values)
    }


    function create () {
         if(username.name.trim()=== "" || username.username.trim() === "" ||
             username.email.trim() === "" || username.phone.trim() === "" ) {
             alert("Please enter a valid name");
         }
         else{
                setMassiv([...massiv, username]

                );
                reset(
                    setUsername({
                        name: '',
                        username: '',
                        email: '',
                        phone: '',
                        website: ''
                    })
                )
         }
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUsername( {
            ...username,
            [name]: value
        })
    }



    function deleteName(id) {
        setMassiv(prevMassiv => prevMassiv.filter((_,v) => v !== id));
    }


    function clean() {
        setMassiv([])
    }

    return (
        <div>
            <h2>Users Page</h2>
            <form onSubmit={handleSubmit(submit)} onChange={(e)=> {handleChange(e)}} onReset={() => reset()} className="form">

                <label>
                    <span>Name</span>
                    <input className={errors.name && "errors"}
                           type="text"
                           placeholder="name"
                           {...register("name",
                               {required: true})}/>
                    {errors.name && <small> obyazatelnoe pole dlya vvoda</small>}
                </label>
                <label>
                    <span>Username</span>
                    <input className={errors.username && "errors"}
                           type="text"
                           placeholder="username"
                           {...register("username",
                               {required: true})}/>
                    {errors.username && <small> обязательное поле для вввода</small>}
                </label>


                <label>
                    <span>Email</span>
                    <input className={errors.email && "errors"}
                           type="text"
                           placeholder="email"
                           {...register("email",
                               {required: true})}/>
                    {errors.email && <small> обязательное поле для вввода</small>}
                </label>

                <label>
                    <span>Phone</span>
                    <input className={errors.phone && "errors"}
                           type="text"
                           placeholder="phone"
                           {...register("phone",
                               {required: true})}/>
                    {errors.phone && <small> обязательное поле для вввода</small>}
                </label>

                <label>
                    <span>Website</span>
                    <input className={errors.website && "errors"}
                           type="text"
                           placeholder="website"
                           {...register("website"
                               )}/>
                </label>

                <button onClick={create}>Создать</button>
                <button  onClick={clean} type="reset">Очистить таблицу</button>
            </form>
            <div>
                <p>Name</p>
                <p>Username</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Website</p>
            </div>

            {
                massiv.length > 0 ? (<div>
                    {
                        massiv.map((item, index) => (<div key={index}>
                            <p>{item.name}</p>
                            <p>{item.username}</p>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <p>{item.website}</p>
                            <button onClick={()=> {deleteName(index)}}>Удалить</button>
                        </div>))
                    }
                </div>) : (<p>Таблица пуста</p>)
            }
        </div>
    );
};


export default UsersPage;