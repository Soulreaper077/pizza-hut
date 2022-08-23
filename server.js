const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}); 
=======
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizza-hunt',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
>>>>>>> 6c6975a0ef729ac6fd0b4a4cd6dbd13360373a4d

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
