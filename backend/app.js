const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mytailorzone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
