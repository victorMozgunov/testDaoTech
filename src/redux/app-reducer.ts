import { InferActionsTypes } from "./store"


const initialState = {
    tasks: [] as Array<{id: number, header: string, isCompleted: boolean}>,
    type: 'ALL' as string
}

const appReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {...action.payload, id: state.tasks.length}]
            }
        case 'CHANGE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(el => {
                    if (el.id === action.payload) return {...el, isCompleted: !el.isCompleted}
                    return el
                })
            }
        case 'DELETE_TASK': 
            return {
                ...state,
                tasks: state.tasks.filter(el => el.id !== action.payload).map((el, id) => (
                    {id, header: el.header, isCompleted: el.isCompleted}
                ))
            }
        case 'CHANGE_TYPE':
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    addTask: (header: string) => ({type: 'ADD_TASK', payload: {header, isCompleted: false}} as const),
    deleteTask: (id: number) => ({type: 'DELETE_TASK', payload: id} as const),
    changeTask: (id: number) => ({type: 'CHANGE_TASK', payload: id} as const),
    changeType: (type: string) => ({type: 'CHANGE_TYPE', payload: type} as const)
}

export default appReducer

export type InitialState = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>