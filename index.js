var express = require('express')
var ejs = require('ejs')
var app = express();

app.use(express.static('public'))
app.set('view engine','ejs');

app.listen(8000);
//localhost:8000
app.get('/',function(req,res){

     res.render('pages/index');


});
app.get('/about',function(req,res){
     res.render('pages/about')
})
app.get('/contact',function(req,res){
     res.render('pages/contact')
})