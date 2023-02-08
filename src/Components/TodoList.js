import React from 'react'
import { api } from '../Api/Axios'
import { useTodoContext } from '../Context/UseTodoContext'
import { DELETE_TODO_ITEM, GET_TODO_LIST, IS_DELETE_ITEM_MODAL_OPEN, IS_ITEM_CHECKED } from '../Reducers/TodoReducer'
import { BsCheckLg } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

export default function TodoList() {

    const { todo, dispatch } = useTodoContext()

    const getTodoList = async () => {
        const res = await api.get("/list/")
        dispatch({type: GET_TODO_LIST, payload: res.data.todolists})
    }

    const deleteTodoItem = async (_id) => {
        dispatch({type: IS_DELETE_ITEM_MODAL_OPEN, payload: true})
        const res = await api.delete(`/list/${_id}`)
        dispatch({type: DELETE_TODO_ITEM, payload: res.data.list})
        setTimeout(() => {
            dispatch({type: IS_DELETE_ITEM_MODAL_OPEN, payload: false})
        }, 2000)
    }

    const onClickCheckbox = async (_id, isChecked) => {
        const res = await api.patch(`/list/${_id}`, { isChecked: !isChecked })
        dispatch({type: IS_ITEM_CHECKED, payload: {data: res.data, id: _id}})
        window.location.reload()
    }

  return (
    <div>
        <button className='all-list-btn' onClick={getTodoList}>Koko lista</button>
        {
                todo && todo.map(({ _id, name, isChecked }) => {
                return (
                    <div className='single-item' key={_id}>
                        <h3 className='item-name'>{name}</h3>
                        {
                            isChecked === false ? <span className='uncheck-btn' onClick={() => onClickCheckbox(_id, isChecked)}><ImCheckboxUnchecked/></span> : <span className='check-btn' onClick={() => onClickCheckbox(_id, isChecked)}><BsCheckLg/></span>
                        }
                        <button className='delete-btn' onClick={() => deleteTodoItem(_id)}>X</button>
                    </div>
                )
            })
        }
    </div>
  )
}
