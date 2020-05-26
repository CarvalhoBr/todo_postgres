import React, {Fragment, useState } from 'react'

export default function InputTodo(){
    
    const [description, setDescription ] = useState('')

    //Adicionando
    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(
                "http://localhost:5000/todos",{
                method: 'POST',
                headers: {'Content-Type': 'application/JSON'},
                body: JSON.stringify(body)
                })
                window.location = '/'

        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <Fragment>
            <h1 className="Text-center mt-5">Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className='form-control' 
                    value={description}
                    onChange={e => setDescription(e.target.value)}></input>
                <button type='submit' className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}