const express = require('express')
const router = express.Router();
const postController = require('../controller/postController')
const cors = require("cors")



//@route POST postagens
//@params body
//@desc Cria uma nova postagem 
//@access Public
//@endpoint http://localhost:PORT/postagem

router.post('/post', cors(), postController.criarPost)

//@route DELETE postagens
//@params :id
//@desc Deleta uma postagem utilizando o id
//@access Public
//@endpoint http://localhost:PORT/postagem/:id

router.delete('/post/:id', cors(), postController.deletarbyId)

module.exports = router
