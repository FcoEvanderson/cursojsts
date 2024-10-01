const express = require('express')
const app = express()

// CRUD -> CREATE,  READ,  UPDATE,  DELETE
//         (POST)   (GET)   (PUT)   (DELETE)

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Name: <input type="text" name="nome">
        <button type="submit">Send</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulário Recebido!')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Server executando na porta 3000...')
})