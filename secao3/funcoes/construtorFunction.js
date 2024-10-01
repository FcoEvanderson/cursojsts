// Factory Function => objects
// Constructor Function => objects
// Factory => createPeople()
// Constructor => People(new)

function People(name, surname) {
    //Private Methods or Atributtes
    const ID = 123456
    const internMethod = function(){

    }

    //Publics Methods or Atributtes
    this.name = name
    this.surname = surname

    this.method = function() {
        console.log(this.name + ': I\'m a Method')
    }
}

const p1 = new People('Fco', 'Evan')
const p2 = new People('Dona', 'Meiry')

