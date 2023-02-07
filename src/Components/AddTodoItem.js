import React, { useState } from 'react'
import { api } from '../Api/Axios'
import { useTodoContext } from '../Context/UseTodoContext'
import { ADD_TODO_ITEM, IS_ADD_ITEM_MODAL_OPEN } from '../Reducers/TodoReducer'

export default function AddTodoItem() {

    const { dispatch } = useTodoContext()
    const [ name, setName ] = useState("")

    const addItem = async (e) => {
        e.preventDefault()
        if(name) {
            dispatch({type: IS_ADD_ITEM_MODAL_OPEN, payload: true})
            const res = await api.post("/list/", { name: name })
            dispatch({type: ADD_TODO_ITEM, payload: res.data.list})
            setName("")
            setTimeout(() => {
                dispatch({type: IS_ADD_ITEM_MODAL_OPEN, payload: false})
            }, 2000)
        }
    }

  return (
    <div>
        <form>
            <input className='add-input' required type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit' className='add-btn' onClick={addItem} >Lisää tehtävä</button>
        </form>
    </div>
  )
}
