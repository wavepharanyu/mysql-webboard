import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, TextField, FormControl, Button } from "@mui/material";
import './CreatePost.css'

const CreatePost = () => {

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        author: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }
    
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();  
        await fetch(`http://localhost:8000/api/p/new`, {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), 
        }).then(navigate('/'));
    }   

  return (
    <Container maxWidth="lg" sx={{marginTop: "7rem"}}>
        <h1 className='create-title'>Create New Post</h1>
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <TextField 
                    label="Title"
                    name='title'
                    onChange={handleChange}
                    required
                    type="text"
                    sx={{mb: 3, width: '100%'}}
                    fullWidth
                    value={formData.title}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField 
                    label="Content"
                    name='content'
                    multiline={true}
                    rows={5}
                    onChange={handleChange}
                    required
                    type="text"
                    sx={{mb: 3, width: '100%'}}
                    fullWidth
                    value={formData.content}
                />
            </FormControl>
            <FormControl fullWidth>
                <TextField 
                    label="Author"
                    name='author'
                    onChange={handleChange}
                    required
                    type="text"
                    sx={{mb: 3, width: '100%'}}
                    fullWidth
                    value={formData.author}
                />
            </FormControl>
            <Button variant="contained" color="success" type="submit">Create Post</Button>
        </form>
    </Container>
  )
}

export default CreatePost