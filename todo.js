//Initialize Todo Array
const todos = getSavedNotes()


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
