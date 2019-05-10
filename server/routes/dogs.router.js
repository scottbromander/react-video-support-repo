const express = require('express');
const router = express.Router();

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/:id', (req, res) => {
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(['Moxie', 'Baxter', 'Bailey']);
}); // END GET Route

module.exports = router;