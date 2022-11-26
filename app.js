const express = require('express');
const mongoose = require('mongoose');
const dadosRouter = require('./routes/dadosPessoaisRoutes')
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://0.0.0.0:27017/ApiRestCurriculo",
    {
        useNewUrlParser: true,
        useUnifiedTopology: false,
    },
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Conectado com Mongodb");
        }
    });


app.listen(PORT, () =>{
    console.log(`Servidor está rodando na porta: ${PORT}`);
});

app.use(express.json());
app.use("/dados", dadosRouter);
app.use("/dados:id", dadosRouter);