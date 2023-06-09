const express = require('express');
const sequelize = require('./config/database');
const flashcardsRoutes = require('./routes/flashcard_routes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(flashcardsRoutes);

app.get('/', (req, res) => {
    res.send('Flashcards App');
});

(async () => {
    await sequelize.sync();
    app.listen(port, () => {
        console.log(`Flashcards app listening at http://localhost:${port}`);
    });
})();
