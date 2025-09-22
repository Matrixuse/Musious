const express = require('express');
const router = express.Router();
const db = require('../database.js');
const { protect } = require('../middleware.js'); // This line correctly imports the middleware

// @route   GET api/songs
// @desc    Get all songs for the logged-in user
// @access  Private
router.get('/', protect, (req, res) => {
    const sql = "SELECT * FROM songs";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
});

module.exports = router;

