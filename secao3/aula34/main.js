function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.result')

    const pessoas = []

    function recebeEventForm (evento) {
        evento.preventDefault()
        const name = form.querySelector('.name')
        const surname = form.querySelector('.surname')
        const weight = form.querySelector('.weight')
        const height = form.querySelector('.height')

        pessoas.push({
            name: name.value,
            surname: surname.value,
            weight: weight.value,
            height: height.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${name.value} ${surname.value} ${weight.value} ${height.value}</p>`
    }

    form.addEventListener('submit', recebeEventForm)
}

meuEscopo()