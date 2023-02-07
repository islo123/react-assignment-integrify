import React from 'react'
import { api } from '../Api/Axios'
import { useTodoContext } from '../Context/UseTodoContext'
import { IS_CHECKED_VALUE } from '../Reducers/TodoReducer'

export default function CheckboxItem() {

    const { dispatch } = useTodoContext()

    const showCheckedItem = async () => {
      const res = await api.get("/list/true")
      dispatch({type: IS_CHECKED_VALUE, payload: res.data.list})
    }

    const showUncheckedItem = async () => {
        const res = await api.get("/list/false")
        dispatch({type: IS_CHECKED_VALUE, payload: res.data.list})
    }

  return (
    <div>
        <button className='check-list-btn' onClick={showCheckedItem}>Ruksatut valintaruudut</button>
        <button className='uncheck-list-btn' onClick={showUncheckedItem}>Tyhjät valintaruudut</button>
    </div>
  )
}
