const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/api/welcome', (req, res) => {
    res.send(['terry']);
});

module.exports = router;