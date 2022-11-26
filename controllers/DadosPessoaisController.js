const  dadosPessoaisService = require("../services/DadosServices");

exports.getAllDados = async (req, res) => {
    try{
        const dados = await dadosPessoaisService.getAllDados();
        res.json({data: dados, status: 'sucess'})
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createDados = async (req, res) => {
    try{
        const dados = await dadosPessoaisService.createDados(req.body);
        res.json({data: dados, status: 'sucess'})
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getDadosPeloId = async (req, res) => {
    try{
        const dados = await dadosPessoaisService.getDadosPeloId(req.params.id);
        res.json({data: dados, status: 'sucess'})
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.updateDados = async (req, res) => {
    try{
        const dados = await dadosPessoaisService.updateDados(req.params.id, req.body);
        res.json({data: dados, status: 'sucess'})
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.excluirDados = async (req, res) => {
    try{
        const dados = await dadosPessoaisService.excluirDados(req.params.id);
        res.json({data: dados, status: 'sucess'})
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

