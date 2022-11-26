const DadosPessoaisModel = require("../models/dadosPessoais");

exports.getAllDados = async () => {
    return await DadosPessoaisModel.find();
};

exports.createDados = async (dadosPessoais) => {
    return await DadosPessoaisModel.create(dadosPessoais);
};

exports.getDadosPeloId = async (id) => {
    return await DadosPessoaisModel.findById(id);
};

exports.updateDados = async (id, dadosPessoais) => {
    return await DadosPessoaisModel.findByIdAndUpdate(id, dadosPessoais);
};

exports.excluirDados = async (id) => {
    return await DadosPessoaisModel.findByIdAndDelete(id);
};

