const emptyError = document.querySelector('.empty-error')
const input = document.querySelector('.input')
const addButton = document.querySelector('.add-button')
const ulTaskList = document.querySelector('.tasks-list')
const deleteButton = '<button class="delete-button">Delete</button>'

function emptyErrorMessage(){
    emptyError.innerHTML = 'This field cannot be empty!'
}

function clearInput(){
    input.value = ''
    emptyError.innerHTML = ''
    input.focus()
}

function addTask(taskText = null){
    let task = taskText || input.value
    ulTaskList.innerHTML += `<li>${task} ${deleteButton}</li>`
    clearInput()
    saveTasks()
}

document.addEventListener('click', function(e){
    const el = e.target
    
    if (el.classList.contains('delete-button')) {
        el.parentElement.remove()
        saveTasks()
    }
})

function saveTasks(){
    const liTasks = ulTaskList.querySelectorAll('li')
    const tasksList = []

    for (let task of liTasks){
        let taskText = task.innerText
        taskText = taskText.replace('Delete', '').trim()
        tasksList.push(taskText)
    }

    const tasksJSON = JSON.stringify(tasksList)
    localStorage.setItem('tasks', tasksJSON)
}

function addSavedTasks() {
    const tarefas = localStorage.getItem('tasks')

    if (tarefas) {
        const listaTarefas = JSON.parse(tarefas)
        for (let task of listaTarefas){
            addTask(task)
        }
    }
}

addSavedTasks()

input.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!input.value) return emptyErrorMessage()
        addTask()
    }
})

addButton.addEventListener('click', function(){
    if (!input.value) return emptyErrorMessage()
    addTask()
})
