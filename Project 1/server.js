const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const items = require('./routes/api/items')
const path = require('path')

const app = express();

app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => { console.log('Connected to database...') })
    .catch(err => { console.log(err) });

app.use('/api/items', items)

//Serve the static assets if we are in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () =>{ console.log(`Server running on port ${port}`)})