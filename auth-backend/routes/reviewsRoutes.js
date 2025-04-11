const express = require('express');
const Comment = require('../models/Comment');
const Rating = require('../models/Rating');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/reviews', authenticate, async (req, res) => {
    try {
        const userId = req.user.id;

        const comments = await Comment.find({ userId }).populate('productId', 'name');
        const ratings = await Rating.find({ userId }).populate('productId', 'name');

        res.status(200).json({ comments, ratings });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
});

module.exports = router;
