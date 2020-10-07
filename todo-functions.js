// Function 1: Get Notes from local Storage (If none is present, create a new array)
const getSavedNotes = function () {
    const todosData = localStorage.getItem('todos')
    // console.log(`Initially: ${todosData}`)
    if (todosData != null) {
        return JSON.parse(todosData)
    } else {
        return []
    }
}

// Function 2: Save Todos in Local Storage
const saveTodo = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Function 3: Render Todos
const renderTodos = function (todos, filters) {
    console.log(`Render Todos: ${todos}`)
    const filteredTodos = todos.filter(function (todo) {
        const matchTodos = todo.todo_name.toLowerCase().includes(filters.searchText.toLowerCase())
        return matchTodos
    })
    
    const incompletedTodos = filteredTodos.filter(function (todo) {
        return !todo.todo_complete_status
    })

    // Fetch the HTML Element and set its value to an empty String
    document.querySelector('#show-todo').innerHTML = ''

    //Notificaton of Incompleted Todos
    document.querySelector('#show-todo').appendChild(generateSummaryDOM(incompletedTodos))
    filteredTodos.forEach(function (todo) {
        document.querySelector('#show-todo').appendChild(generateTodoDOM(todo))
    })

}

//Function 4: Generate structure of TODO DOM
const generateTodoDOM = function (todo) {
    
    //Create Container Space
    const todoSpace = document.createElement('div')

    // Create Remove Button
    const button = document.createElement('button')
    button.setAttribute('class', "btn btn-outline-danger")
    button.style.paddingTop = '5px'
    button.style.paddingBottom = '5px'
    button.style.margin = '5px'
    button.style.fontSize = 'small'

    // Create Space for Todo Text
    const todoText = document.createElement('span')

    const breaker = document.createElement('br')

    // Place a Remove Button
    button.textContent = "\nKill Task"
    todoSpace.appendChild(button)
    button.addEventListener('click', function () {
        let todos = removeTodo(todo.todo_id)
        // console.log(todos)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    // Set Text Content as Todo Text
    todoText.textContent = `P${todo.todo_priority}: ${todo.todo_name}`
    todoSpace.appendChild(todoText)

    //Setup a Breaker
    todoSpace.appendChild(breaker)

    return todoSpace
}

//Function 5: Summary of TODO DOM
const generateSummaryDOM = function (incompletedTodos) {
    const summarySpace = document.createElement('div')
    const notification = document.createElement('h3')
    notification.textContent = `Tasks left: ${incompletedTodos.length}`
    return notification
}

//Function 6: Remove Todo
const removeTodo = function (id) {
    
    //Need to find Todo Index
    const todoIndex = todos.findIndex(function(todo){
        return todo.todo_id === id
    })
    
    // Remove Index if >= 0 
    if (todoIndex > -1){
        // console.log(`Before emvoing ${todos}`)
        // console.log("Remove Start")
        todos.splice(todoIndex, 1)
        // console.log("Removed Success")
        // console.log(`After remvoing ${todos}`)
     }
     
     return todos
}

// Function 7: Render Todos Priortites
const renderPTodos = function (todos, filters) {
    const PfilteredTodos = todos.filter(function (todo) {
        const matchTodos = todo.todo_priority.toLowerCase().includes(filters.searchText.toLowerCase())
        return matchTodos
    })

    const incompletedPriorityTodos = PfilteredTodos.filter(function (todo) {
        return !todo.todo_complete_status
    })

    // Fetch the HTML Element and set its value to an empty String
    document.querySelector('#show-todo').innerHTML = ''
    document.querySelector('#show-todo').appendChild(generateSummaryDOM(incompletedPriorityTodos))
    PfilteredTodos.forEach(function (todo) {
        document.querySelector('#show-todo').appendChild(generateTodoDOM(todo))
    })
}
