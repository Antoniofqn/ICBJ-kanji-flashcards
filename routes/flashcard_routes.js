const express = require('express');
const router = express.Router();
const Flashcard = require('../models/flashcard');

router.get('/flashcards', async (req, res) => {
    const level = req.query.level;
    const category = req.query.category;
    const type = req.query.type;

    let query = { where: {} };
    if (level) query.where.level = level;
    if (category) query.where.category = category;
    if (type) query.where.type = type;

    try {
        const flashcards = await Flashcard.findAll(query);
        res.json(flashcards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
