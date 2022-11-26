const express = require('express');
const mongoose = require('mongoose');
const dadosRouter = require('./routes/dadosPesssoaisRoutes')
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/ApiRestCurriculo",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family:4,
    },
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Conectado com Mongodb");
        }
    });


app.use(express.json());
app.use("/", dadosRouter)
app.listen(PORT, () =>{
    console.log(`Servidor está rodando na porta: ${PORT}`);
});