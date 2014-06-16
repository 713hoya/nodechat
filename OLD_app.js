
/**
 * Module dependencies.
 */
/*
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
*/

var app = require('http').createServer(handler)
	, io = require('socket.io').listen(app)
	, fs = require('fs')

    app.listen(3000);
  
function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
        if (err) {
        	res.writeHead(500);
        	return res.end('Error loading index.html');
       	}
  
       	res.writeHead(200);
       	res.end(data);
    });
}
  
io.sockets.on('connection', function (socket) {
      socket.on('my other event', function (data) {
         	console.log(data);
        	socket.emit("my_message", data);
        	socket.broadcast.emit("message", data);
       });
 });