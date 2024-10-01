exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Name: <input type="text" name="nome"> <br>
            Outro campo: <input type="text" name="outrocampo">
            <button type="submit">Send</button>
        </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST')
}