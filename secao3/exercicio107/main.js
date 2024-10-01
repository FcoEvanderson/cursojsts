class FormValidate {
    constructor(){
        this.form = document.querySelector('.form')
        this.eventos()
    }

    eventos(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.isValid()
        const senhasValidas = this.passwordIsValid()

        if(camposValidos && senhasValidas) {
            alert('Form enviado com sucesso!')
            this.form.submit()
        }
    }

    passwordIsValid(){
        let valid = true

        const senha = this.form.querySelector('.password')
        const repetirSenha = this.form.querySelector('.repeat-password')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.errorCreate(senha, 'As senhas precisam ser iguais.')
            this.errorCreate(repetirSenha, 'As senhas precisam ser iguais.')
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            this.errorCreate(senha, 'Senha precisa ter de 6 a 12 caracteres.')
            valid = false
        }

        return valid
    }

    isValid(){
        let valid = true

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campo of this.form.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText
            if(!campo.value){
                this.errorCreate(campo, `Campo "${label}" não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('user')){
                if(!this.validaUsuario(campo)) valid = false
            }
        }
        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12){
            this.errorCreate(campo, 'Usuário precisa ter de 3 a 12 caracteres.')
            valid = false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.errorCreate(campo, 'Nome de usuário só pode conter letras e/ou números.')
            valid = false
        }
        return valid
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()){
            this.errorCreate(campo, 'CPF Inválido')
            return false
        }
        return true
    }

    errorCreate(field, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
}

const valida = new FormValidate()