var express = require('express');
var app = module.exports = express();	// deixando o acesso externo da variavel app

var bodyParser = require('body-parser');

var allowCors = function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*"); // colocar os dominios permitidos | ex: 127.0.0.1:3000
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
}

app.listen(3000,function(req,res) {
	console.log('*************************************' )
	console.log('server iniciado http://localhost:3000' )
	console.log('*************************************' )
});
app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

