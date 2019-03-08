const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const todoRoute = require('./routes/Todos')

mongoose.connect(db, {useNewUrlParser: true}).then(()=> {
    console.log("Connected to the Database...");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

app.use('/todos', todoRoute);


app.listen(4000, () => {
    console.log(`Server running on port ${port}...`)
});