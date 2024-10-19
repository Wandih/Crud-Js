//Não é mais tudo
const express = require ('express')
const routers = require('./src/routers/pessoa') 

const app = express()

app.use(express.json())

app.use(routers)

const PORT = 3000

app.listen(PORT, () => {
    console.info(`Servidor aberto na porta ${PORT}`)
})
