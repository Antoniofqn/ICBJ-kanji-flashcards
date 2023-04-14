const repl = require('repl');
const sequelize = require('./config/database');
const Flashcard = require('./models/flashcard');

const startREPL = async () => {
  // Sync the database and models
  await sequelize.sync();

  // Start the REPL environment
  const replServer = repl.start({
    prompt: 'Flashcards App > ',
    useColors: true
  });

  // Expose the models and other objects to the REPL context
  replServer.context.sequelize = sequelize;
  replServer.context.Flashcard = Flashcard;
};

startREPL();
