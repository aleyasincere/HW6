// import React from 'react';
//
// function UsersPage() {
//
//     function changeInput(e){
//         console.dir(e.target.value);
//     }
//
//     function blurInput(e){
//         console.dir(e.target.value);
//     }
//
//     function focusInput(){
//         console.log("focus")
//     }
//
//
//     function submit(event) {
//         event.preventDefault();
//         console.log("submit")
//     }
//
//
//     function sayHello() {
//         console.log("sayHello")
//     }
//
//     function reset() {
//         console.log("reset")
//     }
//     return (
//         <div>
//             {/*<input type="text" onInput={changeInput} placeholder="name"/>*/}
//             {/*<input type="text" onBlur={blurInput} placeholder="name blur"/>*/}
//             {/*<input type="text" onFocus={focusInput} placeholder="name focus"/>*/}
//             <form onSubmit={submit} onReset={reset} onChange={changeInput}>
//                 <input type="text" placeholder="username"/>
//                 <input type="text" placeholder="email"/>
//                 <button type="submit"> create </button>
//                 <button type= "button" onClick={sayHello}>test</button>
//                 <button type= "reset">reset</button>
//             </form>
//         </div>
//     );
// }
//
// export default UsersPage;