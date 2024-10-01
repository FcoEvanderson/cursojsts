// function createCalculator(){
//     return {
//         display: document.querySelector('.display'),
        
//         start(){
//             this.buttonsClick()
//             this.pressEnter()
//         },

//         pressEnter(){
//             this.display.addEventListener('keyup', (e) => {
//                 if (e.keyCode === 13) this.makeCount()
//             })
//         },

//         clearDisplay(){
//             this.display.value = ''
//         },

//         deleteOne(){
//             this.display.value = this.display.value.slice(0, -1)
//         },
        
//         makeCount(){
//             let count = this.display.value

//             try {
//                 count = eval(count)

//                 if (!count) {
//                     alert('Invalid Count!')
//                     return
//                 }

//                 this.display.value = String(count)
//             }catch(e){
//                 alert('Invalid Count')
//                 return
//             }
//         },


//         buttonsClick(){
//             //this --> calculator
//             document.addEventListener('click', (e) => {
//                 const el = e.target
//                 if (el.classList.contains('btn-num')) 
//                     this.btnToDisplay(el.innerText)
        
//                 if (el.classList.contains('btn-clear'))
//                     this.clearDisplay()
                
//                 if (el.classList.contains('btn-del'))
//                     this.deleteOne()
                
//                 if (el.classList.contains('btn-eq'))
//                     this.makeCount()
//             })
//         },
//         btnToDisplay(valor){
//             this.display.value += valor
//         }
//     }
// }

// const calculator = createCalculator()
// calculator.start()

function Calculator() {
    this.display = document.querySelector('.display')

    this.start = () => {
        this.getClicks()
        this.pressEnter()
    }

    this.pressEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter') this.makeCount()
        })
    }

    this.getClicks = () => {
        document.addEventListener('click', (event) => {
            const el = event.target
            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.makeCount()
        })
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText
        this.display.focus()
    }
    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0, -1)

    this.makeCount = () => {
        try {
            const count = eval(this.display.value)

            if (!count) {
                alert('Invalid Operation!')
                return
            }
            
            this.display.value = count
        } catch (error) {
            alert('Invalid Operation!')
            return
        }
    }
}

const calculator = new Calculator()
calculator.start()