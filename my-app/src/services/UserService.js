export async function allTodos() {

    const response = await fetch('http://localhost:5000/api/todos');
    return await response.json();
}

export async function createTodo(data) {

    console.log("Create sent...\nData passed to api:");
    console.log(JSON.stringify(data));

    const response = await fetch(`http://localhost:5000/api/todos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}

export async function deleteTodo(data){
    console.log("Delete sent...\nData passed to api:");
    console.log(JSON.stringify(data));

    const response = await fetch(`http://localhost:5000/api/todos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();

}