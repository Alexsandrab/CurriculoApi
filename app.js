const express = require('express');
const mongoose = require('mongoose');
const dadosRouter = require('./routes/dadosPesssoaisRoutes')
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(
    process.env.MONGO_URI || "mongodb://0.0.0.0:27017/ApiRestCurriculo",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Conectado com Mongodb");
        }
    });


app.use(express.json());
app.use("/curriculo/dados", dadosRouter)
app.listen(PORT, () =>{
    console.log(`Servidor está rodando na porta: ${PORT}`);
});