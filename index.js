const express = require('express');
const Movie = require('./Movie')
const cors = require('cors');
require('./config');

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', async(req,res)=>{
    let movie =  await Movie.find()

    res.send(movie)
})



app.listen(5000, ()=>{
    console.log('listening to 5000')
})