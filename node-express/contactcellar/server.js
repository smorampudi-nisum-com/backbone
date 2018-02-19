// var http =  require('http');
// http.createServer(function (req, res){
//     res.writeHead(200, {'content-Type': 'text/plain'});
//     res.end('Hello Santhu\n');
// }).listen(3000, '127.0.0.1');
// console.log('server running at http://127.0.0.1:3000/');

/* using express */

// var express = require('express');
// var app = express();

// app.get('/contacts', function(req, res){
//    res.send({id:req.params.id, name:'The Name', description: "description"});
// });

// app.listen(3000);
// console.log('Listening on the port 3000');

var express =  require('express');
contacts = require('../routes/contacts');

var app = express();

app.get('/contacts', contacts.findAll);
app.get('/contacts/:id', contacts.findById);

app.listen(3000);
console.log('listening to the port 3000 ....');
