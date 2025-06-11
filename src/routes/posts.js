const express = require('express');
const router = express.Router();

let posts = [];

// Get all posts
router.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

// Render new post form
router.get('/new', (req, res) => {
    res.render('new');
});

// Create a new post
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.redirect('/');
});

// Render edit post form
router.get('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render('edit', { post: post });
    } else {
        res.redirect('/');
    }
});

// Update a post
router.post('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex].title = req.body.title;
        posts[postIndex].content = req.body.content;
    }
    res.redirect('/');
});

// Delete a post
router.post('/delete/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== postId);
    res.redirect('/');
});

module.exports = router;