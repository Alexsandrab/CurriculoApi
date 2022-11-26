const express = require("express");

const {getAllDados, createDados, getDadosPeloId, updateDados, excluirDados} = require('../controllers/DadosPessoaisController');

const router = express.Router();

router.route("/").get(getAllDados).post(createDados);
router.route("/:id").get(getDadosPeloId).put(updateDados).delete(excluirDados);

module.exports = router;