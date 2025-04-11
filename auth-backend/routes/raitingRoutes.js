const express = require('express');
const Rating = require('../models/Rating');
const { authenticate } = require('../middleware/authMiddleware'); // Middleware to get the logged-in user
const router = express.Router();

router.post('/ratings', authenticate, async (req, res) => {
    try {
        const { productId, rating } = req.body;
        const userId = req.user.id; // Retrieved from authentication middleware

        const newRating = new Rating({ productId, userId, rating });
        await newRating.save();

        res.status(201).json({ message: 'Rating added successfully', rating: newRating });
    } catch (error) {
        res.status(500).json({ message: 'Error adding rating', error });
    }
});

module.exports = router;
