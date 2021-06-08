const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome to programming');
});

module.exports = router;