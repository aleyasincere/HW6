// import {useState} from "react";
// import Post from "../../components/post/Post";
//
//
// function PostsPage() {
//     const [posts, setPosts] = useState([]);
//
//     function getPosts() {
//         setPosts([
//             {
//                 id: 1,
//                 title: "news1",
//                 body: "Hello world!",
//             },
//             {
//                 id: 2,
//                 title: "news2",
//                 body: "Hello world!",
//             },
//         ])
//
//     }
//
//
//     return (
//         <div>
//             <button onClick={getPosts}> get posts</button>
//             {
//                 posts.length > 0 ?
//                     posts.map(post => <Post key={ post.id } postInfo={ post } />)
//                     :
//                     <p>List pust </p>
//             }
//         </div>
//     );
// }
//     export default PostsPage;