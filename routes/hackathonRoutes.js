const express = require("express")
const hackathonRouter = express.Router()

hackathonRouter.get("/:identificador", (req, resp) => {
    resp.send(`Dados do Stefanini. Identificador: ${req.params.identificador}`)
})

hackathonRouter.post("", (req, resp) => {
    let body = req.body
    resp.send(`Dados do Stefanini. Metodo Post: ${body.nome}\n${body.telefone}`)
})

hackathonRouter.put("/:identificador", (req, resp) => {
    resp.send(`Dados do Stefanini. Metodo Put Identificador: ${req.params.identificador}`)
})

hackathonRouter.patch("/:identificador", (req, resp) => {
    resp.send(`Dados do Stefanini. Metodo Patch Identificador: ${req.params.identificador}`)
})

hackathonRouter.delete("/:identificador", (req, resp) => {
    resp.send(`Dados do Stefanini. Metodo Delete: Identificador: ${req.params.identificador}`)
})

module.exports = hackathonRouter

