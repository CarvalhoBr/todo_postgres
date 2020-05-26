import React, {Fragment, useState} from 'react'

export default function EditTodo({todo}){
    const [text, setText] = useState(todo.description)
    
    //Editando
    async function editTodo(){
        try {
            const body = { 'description': text }
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/JSON'},
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = '/'
        } catch (error) {
            console.error(error)
        }
    }
    

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div className="modal" id={`id${todo.todo_id}`}>
              <div className="modal-dialog">
                <div className="modal-content">

                  <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  <div className="modal-body">
                    <input 
                        type='text' 
                        className='form-control'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                  </div>


                  <div className="modal-footer">
                    <button 
                        type="submit" 
                        className="btn btn-success" 
                        onClick={() => editTodo()}
                        >
                            Edit
                        </button>
                  </div>

                </div>
              </div>
            </div>
        </Fragment>
    )
}