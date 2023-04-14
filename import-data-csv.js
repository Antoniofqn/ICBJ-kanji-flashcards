const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const sequelize = require('./config/database');
const Flashcard = require('./models/flashcard');

const importDataFromCsv = async () => {
  try {
    // Connect to the database and sync the model
    await sequelize.sync({ force: true });

    // Read and parse the CSV file
    const csvFilePath = path.join(__dirname, 'kanji_csv.csv');
    const flashcards = [];

    fs.createReadStream(csvFilePath)
      .pipe(csvParser({ separator: ';' }))
      .on('data', (data) => {
        flashcards.push(data);
      })
      .on('end', async () => {
        // Create flashcard objects
        await Promise.all(flashcards.map((flashcard) => Flashcard.create(flashcard)));

        console.log('Data imported successfully from CSV');
        process.exit(0);
      });
  } catch (error) {
    console.error('Error importing data from CSV:', error);
    process.exit(1);
  }
};

importDataFromCsv();
