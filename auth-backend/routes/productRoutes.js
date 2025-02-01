const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to the productsData.js file
const filePath = path.join(__dirname, '../data/productsData.js');

// Add a new product to productsData.js
function addNewProduct(newProduct) {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Find the last closing square bracket to insert the new product
    const insertPosition = fileContent.lastIndexOf(']');
    const beforeInsert = fileContent.substring(0, insertPosition);
    const afterInsert = fileContent.substring(insertPosition);

    const updatedContent =
        beforeInsert + `,\n    ${JSON.stringify(newProduct, null, 4)}` + afterInsert;

    // Save the updated file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
}

// POST route to add a new product
router.post('/add', (req, res) => {
    const { id, slug, name, price, description, image, stock } = req.body;

    // Validate input
    if (!id || !slug || !name || !price || !description || !image || stock === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new product
    const newProduct = { id, slug, name, price, description, image, stock };

    try {
        addNewProduct(newProduct);
        res.status(200).json({ message: 'Product added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add product' });
    }
});

module.exports = router;
