import React, { useState, useEffect } from 'react'
import PostItem from '../../components/postItem/PostItem'
import Container from '@mui/material/Container';

const Home = () => {
    const [allPosts, setAllPosts] = useState([])

    const fetchPosts = async() => {
        const response = await fetch(`https://mysql-webboard.vercel.app/api/posts`);
        const data = await response.json();
        setAllPosts(data);
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    return (
        <Container maxWidth="md" sx={{marginTop: "7rem"}}>
            {allPosts.map(post => {
                return <PostItem post={post} key={post.id}/>
            })}
        </Container>
    )
}

export default Home