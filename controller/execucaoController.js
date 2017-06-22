var db  = require('../db_config.js');

exports.list = function(callback){
    
    db.Aluno.find({},function(error,alunos) {
		if (error) {
	 		callback({error: 'Não foi possivel listar alunos'});
	 	} else {
	 		callback(alunos);
	 	}
	});
};

exports.aluno = function(id,callback){

    db.Aluno.findById(id,function(error,aluno) {
		if (error) {
	 		callback({error: 'Não foi possivel retornar o aluno'});
	 	} else {
	 		callback(aluno);
	 	}
	});

};

exports.save = function(nome,dtnasc,celular,endereco,turma,urlimg,callback){

    new db.Aluno({
		'nome': nome,
		'dtnasc': dtnasc,
		'celular': celular,
		'endereco': endereco,
		'turma': turma,
		'dtinclusao': new Date(),
		'urlimg': urlimg
	}).save(function(error,aluno) {
		if (error) {
			callback({error: 'Não foi possivel salvar aluno'});
		} else {
			callback(aluno);
		}
	});


};

exports.update = function(id,nome,dtnasc,celular,endereco,turma,urlimg,callback){

    db.Aluno.findById(id,function(error,aluno) {
		
		if (nome) {
			aluno.nome = nome;
		}
		if (dtnasc) {
			aluno.dtnasc = dtnasc;
		}
		if (celular) {
			aluno.celular = celular;
		}
		if (endereco) {
			aluno.endereco = endereco;
		}
		if (turma) {
			aluno.turma = turma;
		}
		if (urlimg){
			aluno.urlimg = urlimg;	
		}

		aluno.save(function(error,aluno) {
			if (error) {
				callback({error: 'Não foi possivel salvar aluno'});
			} else {
				callback(aluno);
			}
		})

	});


};

exports.delete = function(id,callback){

    db.Aluno.findById(id,function(error,aluno) {
		if (error) {
	 		callback({error: 'Não foi possivel excluir o aluno'});
	 	} else {
	 		aluno.remove(function(error) {
				if(!error){
					callback({response:'Aluno excluido com sucesso'});
				} 
			 })
	 	}
	});

};