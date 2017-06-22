var db_string = 'mongodb://127.0.0.1/janelaTecnicaTI'; 
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

db.on('error',console.error.bind(console,'Error ao conectar no banco'));
db.once('open',function() {
	
	// SCHEMA JANELA
	var janelaSchema = mongoose.Schema({
		titulo: String
	});
	
	// SCHEMA EXECUCAO
	var execucaoSchema = mongoose.Schema({
		type: String,
		path: String,
		field: String,
		changeset: String,	
		alias: String,
		x6_var: String,
		x6_conteud: String
	});

	// MODEL JANELA
	exports.Janela = mongoose.model('Janela',janelaSchema);
	
	// MODEL EXECUCAO
	exports.Execucao = mongoose.model('Execucao',execucaoSchema);

	
});