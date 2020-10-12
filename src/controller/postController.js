const postModel = require('../model/postModel')
const helper = require('../helper/helper')


const criarPost = (request, response) =>{
    const {titulo, conteudo, tags} = request.body;
    const novoPost = {
        id: helper.newId(postModel),
        data_criacao: new Date().toString(),
        titulo: titulo,
        conteudo: conteudo, 
        tags: tags 

    }
    postModel.push(novoPost)

    return response.status(200).json(novoPost)
}

const deletarbyId = (request, response) =>{
    const id = request.params

    const filtrados = postModel.filter(item => {
        return item.id == id}) [0]

    const index = postModel.indexOf(filtrados)

    postModel.splice(index,1)

    response.json(postModel)

}

module.exports ={
   
    criarPost,
    deletarbyId
}