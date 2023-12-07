import {useEffect,useState,React} from 'react'
import '../pages/Main.css'
import Post from '../components/Post'
const Main = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{

            const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/post/allpost');
                const data = await response.json();
                console.log('API Response:', data.post);

                if (data.success) {
                    data.post.map((p)=>{
                        console.log(p);
                        setPosts([...posts,p])
                    })
                    console.log(posts)
                } else {
                console.error('Failed to fetch posts:', data.message);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            };

            fetchData();
            
    },[])
  return (
    <div className='mainpage'>
        <div className="postsection">
            <Post />
        </div>
    </div>
  )
}

export default Main
