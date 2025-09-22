require('dotenv').config(); // This is the new line that loads your .env file
const express = require('express');
const cors = require('cors');
const db = require('./database.js');
const path = require('path');

const app = express();
const PORT = 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- API Routes ---
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/songs');

app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

