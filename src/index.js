require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000

const app = express();
app.use(cors());
app.use(bodyParser.json());

const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

app.get("/",(req, res, next)=>{
    res.send("To do list Home page");
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })

