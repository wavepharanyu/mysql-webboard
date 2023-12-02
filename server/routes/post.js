const express = require('express')
const moment = require('moment')
const router = express.Router()
const db = require('../db')

const getPostAndComments = async(postId) => {
    let postComments = [];
    let post = null;

    try{
        const arrPost = await db
            .select('*')
            .from('post')
            .where('id', +postId)
        post = arrPost[0];
        post.createdAt = moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a');

        postComments = await db
            .select('*')
            .from('comment')
            .where('postId', +postId);
        postComments = postComments.map(comment => {
            const createdAt = moment(comment.createdAt).format('MMMM Do YYYY, h:mm:ss a');
            return{ ...comment, createdAt }
        })
    }
    catch (error){
        console.log(error)
    }
    return { post, postComments }
}

router.get('/posts', async(req,res) => {
    let allPosts = [];
    try{
        allPosts = await db
            .select('post.id', 'post.title', 'post.author', 'post.createdAt')
            .count('comment.id as commentCount')
            .from('post')
            .leftJoin('comment', 'post.id', 'comment.postId')
            .groupBy('post.id')
            .orderBy('post.id', 'desc');
        allPosts = allPosts.map(post => {
            const createdAt = moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a');
            return{ ...post, createdAt }
        })
    }
    catch(error){
        console.log(error)
    }
    res.json(allPosts);
})

router.post('/p/new', async(req,res) => {
    const { title, content, author } = req.body
    
    try{
        if(!title || !content || !author){
            throw new Error('Please fill input value');
        }
        await db.insert({title, content, author}).into('post')
    }
    catch(error){
        console.log(error)
    }
})

router.get('/p/:postId', async(req,res) => {
    const { postId } = req.params;

    const { post, postComments } = await getPostAndComments(postId)

    res.json({ post, postComments });
})

router.post('/p/:postId/comment', async(req,res) => {
    const { content, author } = req.body
    const { postId } = req.params;

    try{
        if(!content || !author){
            throw new Error('Please fill input value');
        }
        await db.insert({content, author, postId: +postId}).into('comment')
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router