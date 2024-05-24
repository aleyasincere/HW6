// import React from 'react';
// import style from './MainPage.module.css';
//
// function MainPage () {
//
//     function sayHello() {
//         alert("hello")
//     }
//
//     function sayHelloDouble() {
//         alert("heelo world")
//     }
//
//
//     function sayHelloWithName(name) {
//         alert(`Hello ${name}!`)
//     }
//
//
//     return (
//         <div>
//             <h2>Обработчики  событий</h2>
//             <button onClick={() => sayHelloWithName("Anna")}> Hello Anna</button>
//             <button onClick={sayHello}>click</button>
//             <button onDoubleClick={sayHelloDouble}> double click</button>
//             <button onContextMenu={() => alert("context") }>context menu</button>
//             <button onWheel={() => alert("wheel click")}>mouse center</button>
//         </div>
//     );
// };
//
// export default MainPage;