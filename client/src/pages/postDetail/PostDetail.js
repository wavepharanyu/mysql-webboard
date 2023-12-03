import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import CommentList from '../../components/commentList/CommentList';
import CommentForm from '../../components/commentForm/CommentForm';
import './PostDetail.css'

const PostDetail = () => {
    const { id } = useParams();

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchPost = async() => {
        const response = await fetch(`https://mysql-webboard.vercel.app/api/p/${id}`);
        const data = await response.json();
        setData(data);
        setIsLoading(false)
    }

    useEffect(()=>{
        fetchPost()
    },[])

    if(isLoading){
        return(
            <Container maxWidth="md" sx={{marginTop: "7rem"}}>
                <h2>Loading...</h2>
            </Container>
        ) 
    }
    else{
        const { title, author, createdAt, content } = data.post
        return (
            <Container maxWidth="lg" sx={{marginTop: "7rem"}}>
                <div className='detail-container'>
                    <h1 className='detail-title'>{title}</h1>
                    <span className='detail-subtitle'>{author} | {createdAt}</span>
                    <p className='detail-content'>{content}</p>
                    <hr className='detail-underline'/>
                    <CommentForm postId={id}/>
                    <hr className='detail-underline'/>
                    <CommentList comments={data.postComments}/>
                </div>
            </Container>
        )
    }
}

export default PostDetail