//Initialize Todo Array
const todos = getSavedNotes()

//Filter Object
const filters = {
    searchText: '',
} 

// Need to Render Initially as well in order to show how many Todos are left!
renderTodos(todos, filters)

//When user is creating a new Todo
document.querySelector('#create-todo').addEventListener('submit', function(e){
    //Prevent Default Action
    e.preventDefault()

    //Create New Todo (Todo ID, Todo text, Todo Status)
    todos.push({
        todo_id: uuidv4(),
        todo_name: e.target.elements.createTodo.value,
        todo_complete_status: false,
        todo_priority:  e.target.elements.prior.value,
    })
    // Save New Todo
    saveTodo(todos)

    //Render Todos
    renderTodos(todos, filters)

    //Make the field empty again
    e.target.elements.createTodo.value = ""

})

// When user is searching via "Name"
document.querySelector('#search-todos').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// When user is searching via "Priority"
document.querySelector('#pr-search').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderPTodos(todos, filters)
})
