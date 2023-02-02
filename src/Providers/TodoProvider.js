import { createContext, useReducer } from "react"
import { todoReducer } from "../Reducers/TodoReducer"

export const TodoContext = createContext()

const defaultState = {
    todo: [],
    isAddItemModalOpen: false,
    isDeleteItemModalOpen: false,

}

export const TodoProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(todoReducer, defaultState)

    return (
        <TodoContext.Provider value={{...state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}