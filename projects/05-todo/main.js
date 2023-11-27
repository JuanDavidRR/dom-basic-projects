const form = document.getElementById('form')
const input = document.getElementById('input')
const taskList = document.getElementById('task-list')
const tasksContainer = document.querySelector('.tasks-container')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskItem = document.createElement('li')
    const doneBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    doneBtn.innerText = 'Check'
    deleteBtn.innerHTML = 'Delete'

    if (input.value !== '') {
        tasksContainer.style.display = 'block'
        taskItem.innerText = input.value
        taskItem.append(deleteBtn, doneBtn)
        taskList.appendChild(taskItem)

        doneBtn.addEventListener('click', function () {
            taskItem.style.textDecoration = 'line-through'
        })

        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(taskItem)
        })

        input.value = ''
    } else {
        alert('Please type your task')
    }


})

