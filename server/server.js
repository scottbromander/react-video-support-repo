const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
const dogs = require('./routes/dogs.router');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);
app.use('/dogs', dogs);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});