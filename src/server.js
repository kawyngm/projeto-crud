const express = require('express')
const path = require('path')

const app = express()

// definindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Defininfo Arquivos Publicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }))

// Rotas

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// 404 error (Not Found)
app.use((req, res)=>{
    res.send("Página não Encontrada!")
})

// Executando o servidor
const port = process.env.port || 8080
app.listen(port, ()=> console.log(`Server is listening on ${port}`))
