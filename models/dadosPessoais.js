const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dadosPessoais = new Schema({
    nome:{
        type: String,
    },
    endereco:{
        type: String,
    },
    telefone: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DadosPessoais', dadosPessoais);