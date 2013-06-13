// #!/usr/bin/env node

// /**
//  * Module dependencies.
//  */

// var express = require('express')
//   , routes = require('./routes')
//   , user = require('./routes/user')
//   , http = require('http')
//   , path = require('path')
//   , port = 8080
//   , url  = 'http://localhost:' + port + '/';
// /* We can access nodejitsu enviroment variables from process.env */
// /* Note: the SUBDOMAIN variable will always be defined for a nodejitsu app */
// if(process.env.SUBDOMAIN){
//   url = 'http://' + process.env.SUBDOMAIN + '.jit.su/';
// }

// var app = express();
// app.use(express.logger());

// app.configure(function(){
//   app.set('port', process.env.PORT || port);
//   // app.set('views', __dirname + '/views');
//   app.set('views', __dirname + '/app');
//   // app.set('view engine', 'jade');
//   app.use(express.favicon());
//   app.use(express.logger('dev'));
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(express.cookieParser('nomoresecreatforall'));
//   app.use(express.session());
//   app.use(express.static(__dirname + '/app'));
//   app.use(app.router);
//   app.engine('html', require('ejs').renderFile);
//   // app.use(express.static(path.join(__dirname, 'public')));
// });

// app.configure('development', function(){
//   app.use(express.errorHandler());
// });

// app.get('/', function(request, response) {
//   response.render('index.html')
// });

// // app.get('/', routes.index);
// // app.get('/users', user.list);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
//   console.log(url);
// });

var express = require("express");
 
var app = express();
app.use(express.logger());

// Configuration

app.configure('development',function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.configure('production',function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

