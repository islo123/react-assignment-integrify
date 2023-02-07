import React, { useState } from 'react'
import { api } from '../Api/Axios'
import { useTodoContext } from '../Context/UseTodoContext'
import { DELETE_LIST } from '../Reducers/TodoReducer'

export default function DeleteList() {

    const { dispatch } = useTodoContext()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const deleteTodoList = async () => {
        const res = await api.delete('/list/')
        dispatch({type: DELETE_LIST, paylaod: res.data})
        setIsModalOpen(false)
        window.location.reload()
    }

    const openModal = () => {
      setIsModalOpen(true)
    }

    const closeModal = () => {
      setIsModalOpen(false)
    }

  return (
    <div style={{textAlign: "right"}}>
      <button className='delete-all-btn' onClick={openModal}>
        Poista tehtävät
      </button>
      {
        isModalOpen && <div className='delete-all-modal'>
        Oletko varma, että haluat poista kaikki tehtävät?
        <button className='delete-all-btn' onClick={deleteTodoList}>Poista tehtävät</button>
        <button className='cancel-btn' onClick={closeModal}>Peruutta</button>
      </div>
      }

    </div>
  )
}
