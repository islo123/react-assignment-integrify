import React from 'react'
import { useTodoContext } from '../Context/UseTodoContext'

export default function Modal({title}) {

  const { isAddItemModalOpen, isDeleteItemModalOpen } = useTodoContext()

  return (
    <div>
      {
        isAddItemModalOpen && <h3 className='modal add-modal'>Tehtävä lisätty</h3>
      }
      {
        isDeleteItemModalOpen && <h3 className='modal delete-modal'>Tehtävä poistettu</h3>
      }
    </div>
  )
}
