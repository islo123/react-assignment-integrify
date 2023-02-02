import { useContext } from "react"
import { TodoContext } from "../Providers/TodoProvider"

export const useTodoContext = () => {
    return useContext(TodoContext)
}