var express = require('express');
var fs = require('fs');

var app     = express();
app.use(express.static('public'));
app.use(express.static('build'));
app.use('/images', express.static('images'));
app.use('/build', express.static('build'));
app.use('/fonts', express.static('fonts'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/json', express.static('json'));


app.get('*', function(req, res){
    res.sendFile('./index.html', { root : __dirname});
});

app.listen(process.env.PORT || 8080);
