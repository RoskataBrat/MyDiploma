router.post('/comments', authenticate, async (req, res) => {
    try {
        const { productId, comment } = req.body;
        const userId = req.user.id;

        if (!productId || !comment) {
            return res.status(400).json({ message: 'Product ID and comment are required' });
        }

        const newComment = new Comment({ productId, userId, comment });
        await newComment.save();

        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error("Error while adding comment:", error); // Log the exact error
        res.status(500).json({ message: 'Server error while adding comment.' });
    }
});

