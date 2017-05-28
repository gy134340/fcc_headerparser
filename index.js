/**
 * this is for fcc_timestamp
 * @author  gy134340
 */

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
	console.log('server is running', app.get('port'))
});	


// req.hostname
// req.ip


app.get('/', function(req, res) {

	var software = req.headers['user-agent'];
	software = software.match(/\(([^)]+)\)/)[1];
	var obj = {
		ipaddress: req.ip,
		language: req.headers['accept-language'],
		software: software
	}
	res.json(obj);
});



