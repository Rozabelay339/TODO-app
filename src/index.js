require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const port = 3000

app.get("/",(req, res, next)=>{
    res.send("To do list Home page");
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })