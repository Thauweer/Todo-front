import { ITodo } from "@/interfaces/ITodo";

const getAllTodo = () => fetch('getall', {
    headers: {"authorization": "Bearer " + localStorage.getItem('token')}
}).then(req => req.json()).then((data: any) => data as ITodo[])

const createTodo = (todo: ITodo) => fetch('create', { 
    method: 'POST', 
    body: JSON.stringify(todo), 
    headers: {"authorization": "Bearer " + localStorage.getItem('token')}
}).then()

const updateTodo = (todo: ITodo) => fetch(`update?id=${todo.id}`, { 
    method: 'PUT', 
    body: JSON.stringify(todo),
    headers: {"authorization": "Bearer " + localStorage.getItem('token')}
}).then(req => req.text)

const deleteTodo = (id: number) => fetch(`delete?id=${id}`, {
    method: 'DELETE',
    headers: {"authorization": "Bearer " + localStorage.getItem('token')}
}).then(req => req.text)

export { getAllTodo, createTodo, updateTodo, deleteTodo }