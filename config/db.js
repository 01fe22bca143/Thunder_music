const mongoose = require('mongoose');

     const mongoURI = 'mongodb://127.0.0.1:27017/thundermusic'; // Replace this with your MongoDB connection string

     mongoose.connect('mongodb://127.0.0.1:27017/thundermusic', {
         useNewUrlParser: true,
         useUnifiedTopology: true
     }).then(() => {
         console.log('Connected to MongoDB');
     }).catch((err) => {
         console.error('Error connecting to MongoDB:', err);
     });
     

     //mongodb://localhost:27017/musicapp