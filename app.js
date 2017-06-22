var app 				= require('./app_config');
var fs 					= require('fs');
var express 			= require('express');
var janelaController 	= require('./controller/janelaController');

// rota principal
app.get('/',function (req,res) {
   res.json({msg:'Ola mundo!'}) 
});


//-----------------
// JANELA / ROTAS
//----------------

// ROTA TODOS JANELAS - GET
app.get('/api/janelas',function(req,res) {
	janelaController.list(function(dados) {
		res.json(dados);
	});
});
// LISTA JENELA POR ID - GET
app.get('/api/janelas/:id',function(req,res) {
	var id = req.param('id');
	janelaController.janela(id,function(dados) {
		res.json(dados);
	});
});

//-----------------------
// JANELA / INCLUI - POST
//-----------------------
app.post('/api/janelas',function(req,res) {
	
	var titulo 		= req.param('titulo');

	janelaController.save(titulo,function(dados) {
		res.json(dados);
	});
});

//-----------------------
// JANELA / ALTERA - PUT
//-----------------------
app.put('/api/janelas',function(req,res) {
	
	var id 			= req.param('id');
	var titulo 		= req.param('titulo');

	janelaController.update(id,titulo,function(dados) {
		res.json(dados);
	});

});

//-------------------------
// JANELA / EXCLUI - DELETE
//-------------------------
app.delete('/api/janela/:id',function(req,res) {
	var id = req.param('id');
	janelaController.delete(id,function(dados) {
		res.json(dados);
	})
});