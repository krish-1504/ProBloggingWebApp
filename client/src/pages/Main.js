import {useEffect,useState,React} from 'react'
import '../pages/Main.css'
import Post from '../components/Post'
const Main = () => {
    console.log('Main component rendered');
    const [posts,setPosts]=useState([])
    useEffect(()=>{
            console.log("hiiiiiii");
            const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/post/allpost');
                const data = await response.json();
                console.log('API Response:', data);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            };

            fetchData();
            
    },[])
    // console.log("result",posts);
  return (
    <div className='mainpage'>
        <div className="postsection">
            <Post post = {posts[3]}/>
            <Post post = {posts[3]}/>
            <Post post = {posts[3]}/>
            <Post post = {posts[3]}/>
            
        </div>
    </div>
  )
}

export default Main
