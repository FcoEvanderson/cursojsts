const express = require('express')
const app = express()

// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila
// http://facebook.com/profiles/12345?
// campanha=googleads &
// nome_campanha=seila

app.use(
    express.urlencoded({extended: true})
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Name: <input type="text" name="nome">
        <button type="submit">Send</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
    // /profiles/3
    // /profiles/7
    console.log(req.params)
    console.log(req.query)
    res.send(`${req.query.nome} ${req.query.sobrenome}`)
})

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato!')
})

app.post('/', (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Server executando na porta 3000...')
})