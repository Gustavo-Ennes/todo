export async function getAllTodos() {

    const response = await fetch('/api/todos');
    return await response.json();
}

export async function createTodo(data) {
    const response = await fetch(`/api/todos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({todo: data})
      })
    return await response.json();
}