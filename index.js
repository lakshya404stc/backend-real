const express = require('express');
const db = require('./db/config')
const route = require('./routes/route');
const cors = require('cors');
const port = 5001

const app = express();

app.use(express.json());
  
app.use(cors())

app.use('/api', route);

app.listen(port, () => {
    console.log(`Server listening at :${port}`);
});


const DATABASE_URL = 'mongodb+srv://lakshya404stc:Ayush%408595@cluster0.xamqbcs.mongodb.net'
const DATABASE = 'Prolink'

db(DATABASE_URL, DATABASE);