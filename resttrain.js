var fortune = require('./lib/fortune.js');

var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
app.set('port', 3001);

var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars  ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' && 
    req.query.test === '1';
    console.log(req.query.test);
    next();
});

app.get('/', function(request,response){
    response.render('home');
    }
);

app.get('/about', function(request,response){
    response.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'})
    }
);

app.use(function(request, response){   
    response.status(404);
    response.render('404');
    } 
);

app.use(function(err, request, response, next){
    console.error(err.stack);
    response.status(500);
    response.render('500');
    }
);

app.listen(app.get('port'), function(){
    console.log('running at ' + app.get('port'));
    }
);