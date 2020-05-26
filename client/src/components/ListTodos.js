import React, {Fragment, useEffect, useState} from 'react'
import EditTodo from './EditTodo'

export default function ListTodos(){

const [todos, setTodos] = useState([])

const getTodos = async () => {  
    try {
        const response = await fetch('http://localhost:5000/todos')
        const jsonData = await response.json()
        setTodos(jsonData)
    } catch (error) {
        console.error(error.message)
    }
}

useEffect(()=>{
    getTodos()
}, [])

//Excluindo
async function deleteTodo(index){
    try {
        const response = await fetch(
            `http://localhost:5000/todos/${index}`,{
            method: 'DELETE'
        })    
        setTodos(todos.filter(todo => todo.todo_id !== index))
    } catch (error) {
        console.error(error.message)
    }
    
}

    return (
        <Fragment>
            {" "}
            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                
                <tbody>
                    {/*<tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                    {todos.map(todo =>(
                        
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo}/>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{deleteTodo(todo.todo_id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </Fragment>
    )
}