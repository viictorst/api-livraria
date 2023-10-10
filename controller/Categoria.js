const express = require("express");

const categoriaModel = require("../model/Categoria");

const router = express.Router();

// ROTA DE INSERÇÃO DE CATEGORIA
router.post("/categoria/cadastrarCategoria", (req, res) => {

    let {nome_categoria} = req.body;
    //console.log(nome_categoria);

    categoriaModel.create({nome_categoria})

});

module.exports = router;