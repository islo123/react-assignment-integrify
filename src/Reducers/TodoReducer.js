export const GET_TODO_LIST = "GET_TODO_LIST"
export const ADD_TODO_ITEM = "ADD_TODO_ITEM"
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM"
export const DELETE_LIST = "DELETE_LIST"
export const CHECK_ITEM = "CHECK_ITEM"
export const IS_ITEM_CHECKED = "IS_ITEM_CHECKED"
export const IS_ADD_ITEM_MODAL_OPEN = "IS_ADD_ITEM_MODAL_OPEN"
export const IS_DELETE_ITEM_MODAL_OPEN = "IS_DELETE_ITEM_MODAL_OPEN"
export const IS_CHECKED_VALUE = "IS_CHECKED_VALUE"

export const todoReducer = (state, action) => {
    switch(action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO_ITEM:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case DELETE_TODO_ITEM:
            const filter = state.todo.filter(({_id}) => {
                return _id !== action.payload._id
            })
            return {
                ...state,
                todo: filter
            }
        case DELETE_LIST:
            return {
                ...state,
                todo: action.payload
            }
        case IS_ITEM_CHECKED:
            return  {
                ...state,
                todo: state.todo.map((todo) => {
                    if(todo._id === action.payload.id){
                        return  {...todo, isChecked: !action.payload.data}
                    }
                    return todo
                })
            }
        case IS_ADD_ITEM_MODAL_OPEN:
            return {
                ...state,
                isAddItemModalOpen: action.payload
            }
        case IS_DELETE_ITEM_MODAL_OPEN:
            return {
                ...state,
                isDeleteItemModalOpen: action.payload
            }
        case IS_CHECKED_VALUE:
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state
    }
}