const express = require('express')
const path = require("path")
const app = express()
const hackathonRouter = require("./routes/hackathonRoutes")

app.use(express.json())
app.use("/hackathon", hackathonRouter)

app.get("/", (req, resp) => {
    resp.sendFile(path.resolve(__dirname, "pages/index.html"))
})

app.listen(4000, () => {
    console.log("Servidor rodando")
})