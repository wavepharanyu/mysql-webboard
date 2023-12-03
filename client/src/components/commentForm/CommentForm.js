import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, Button } from "@mui/material";
import './CommentForm.css'

const CommentForm = ({postId}) => {

    const [formData, setFormData] = useState({
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
         
        await fetch(`https://mysql-webboard.vercel.app/api/p/${postId}/comment`, {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), 
        })     
    }   

  return (
    <div className='comment-form-container'>
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <TextField 
                    label="Comment"
                    name='content'
                    multiline={true}
                    rows={3}
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
                    sx={{mb: 2, width: '100%'}}
                    fullWidth
                    value={formData.author}
                />
            </FormControl>
            <Button variant="contained" color="success" type="submit">Comment</Button>
        </form>
    </div>
  )
}

export default CommentForm