var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var certo = req.body.certoServer;
    var errado = req.body.erradoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo quizModel.js
    quizModel.cadastrar(certo, errado, fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

var quizModel = require("../models/quizModel");

function cadastrarJogo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var certo = req.body.certoServer;
    var errado = req.body.erradoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo quizModel.js
    quizModel.cadastrarJogo(certo, errado, fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrar,
    cadastrarJogo
}