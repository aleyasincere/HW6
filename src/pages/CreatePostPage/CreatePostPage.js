// import React, {useState} from 'react';
// import post from "../../components/post/Post";
//
// function CreatePostPage() {
//
//     const [posts, setPosts] = useState({
//         username: "",
//         email: "",
//         body: ""
//     })
//
//     function changeInput (e) {
//        const name = e.target.name;
//        const value = e.target.value;
//        setPosts({ ...posts, [name]: value });
//     }
//
//     function createPost(e) {
//         e.preventDefault()
//         if(post.username.trim() === "" || post.email.trim() === "") {
//             alert("Please enter a valid email");
//         }
//         console.log(posts)
//     }
//
//
//     function reset () {
//         setPosts(
//             {
//                 username: "",
//                 email: "",
//                 body: ""
//             })
//     }
//
//
//
//
//     function createDefaultValues () {
//
//         setPosts({
//             username: "aliya",
//             email: "aliyash@gmail.com",
//             body: "text"
//         })
//     }
//     return (
//         <div>
//             <h2>Create Post</h2>
//
//             <form onSubmit={createPost}  onReset={reset} onChange={changeInput}>
//             <input type="text" placeholder="username"
//                    name="username" value={posts.username} />
//             <input type="text" placeholder="email"
//                    name="email" value={posts.email} />
//             <input type="text" placeholder="body"
//                    name="body" value={posts.body} />
//
//             <button>create</button>
//             <button  type = " reset" >reset</button>
//             <button type = "button" onClick={createDefaultValues}> create default values</button>
//             </form>
//         </div>
//
//
//     );
//
// }
//
// export default CreatePostPage;