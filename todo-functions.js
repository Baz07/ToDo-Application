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
