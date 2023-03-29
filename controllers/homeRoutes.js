const router = require('express').Router();
const { Comment, Post, User } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [Comment, User],
            attributes: { exclude: ['password'] },
        })
        const posts = postData.map((post) => post.get({ plain: true }))
        if (req.session.logged_in) {
            res.status(200).render('homepage', { posts, logged_in: true })
        } else {
            res.status(200).render('homepage', { posts })
        }
    } catch (err) {
        res.status(400).json(err)
    }
});


router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.status(200).render('dashboard', { user, logged_in: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to the dashboard
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/post/:postId', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.postId, {
            include: [{ model: Comment, include: [{ model: User, attributes: { exclude: ['password'] } }] }, { model: User, attributes: { exclude: ['password'] } }],
        })
        const post = postData.get({ plain: true })

        post.comments.forEach(comment => {
            if (comment.user_id === req.session.user_id) {
                comment.yours = true; // marks which comments belong to the currently logged in user and uses this information to render UPDATE and DELETE buttons only on those comments
            }
        });
        
        if (req.session.logged_in) {
            res.status(200).render('post', { post, logged_in: true, user_id: req.session.user_id })
        } else {
            res.status(200).render('post', { post })
        }
    } catch (err) {
        res.status(400).json(err)
    }
});


module.exports = router;