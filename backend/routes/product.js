const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// Add a new product
router.post('/', async (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = new Product({ name, price, description });
    try {
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding product' });
    }
});

module.exports = router;
