const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, 'categories.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/mytalorzone', (req, res) => {
    res.sendFile(path.join(__dirname, 'mytalorzone.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 },
    ];
    res.json(products);
});

// New welcome endpoint
app.get('/welcome', (req, res) => {
    res.json({ message: 'Welcome to the Flask API Service!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
