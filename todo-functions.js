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
