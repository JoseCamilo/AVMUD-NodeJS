var db  = require('../db_config.js');

exports.list = function(callback){
    
    db.Janela.find({},function(error,janelas) {
		if (error) {
	 		callback({error: 'Não foi possivel listar janelas'});
	 	} else {
	 		callback(janelas);
	 	}
	});
};

exports.janela = function(id,callback){

    db.Janela.findById(id,function(error,janela) {
		if (error) {
	 		callback({error: 'Não foi possivel retornar a janela'});
	 	} else {
	 		callback(janela);
	 	}
	});

};

exports.save = function(titulo,callback){

    new db.Janela({
		'titulo': titulo

	}).save(function(error,janela) {
		if (error) {
			callback({error: 'Não foi possivel cadastrar janela'});
		} else {
			callback(janela);
		}
	});


};

exports.update = function(id,titulo,callback){

    db.Janela.findById(id,function(error,janela) {
		
		if (titulo) {
			janela.titulo = titulo;
		}
		janela.save(function(error,janela) {
			if (error) {
				callback({error: 'Não foi possivel alterar janela'});
			} else {
				callback(janela);
			}
		})

	});


};

exports.delete = function(id,callback){
    db.Janela.findById(id,function(error,janela) {
		if (error) {
	 		callback({error: 'Não foi possivel excluir a janela'});
	 	} else {
	 		janela.remove(function(error) {
				if(!error){
					callback({response:'Janela excluida com sucesso'});
				} 
			 })
	 	}
	});

};