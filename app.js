var express    = require('express');
var bodyParser = require('body-parser');
var morgan = require("morgan");
var housing = require('./routes/housing') // make semantic, e.g., var swords = require('./routes/swords')
require('dotenv').load()

var app = express();

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/housing', housing); // make semantic, e.g., app.use('/api/swords', swords);

app.listen(process.env.PORT || 8080);
console.log('Server started on localhost://8080');

module.exports = app;
