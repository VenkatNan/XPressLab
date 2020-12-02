const express = require('express');
const path = require('path');
const stdntDB = require('./data/student-db.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
})

app.get('/data', (req, res) => {
    res.render('data/student-db.js', {data: stdntDB.getAll()})
});
    
	