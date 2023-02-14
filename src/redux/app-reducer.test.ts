import appReducer, { actions, InitialState } from "./app-reducer"

let state: InitialState

beforeEach(() => {
    state = {
        tasks: [
            {id: 0, header: 'Погулять с собакой', isCompleted: false},
            {id: 1, header: 'Помыть машину', isCompleted: true}
        ],
        type: 'ALL'
    }
})

describe('test app-reducer', () => {   
    test('test action addTask', () => {
        const newState = appReducer(state, actions.addTask('Сходить в тренажерный зал'))
    
        expect(newState).toEqual({
            tasks: [
                {id: 0, header: 'Погулять с собакой', isCompleted: false},
                {id: 1, header: 'Помыть машину', isCompleted: true},
                {id: 2, header: 'Сходить в тренажерный зал', isCompleted: false}
            ],
            type: 'ALL'
        })
    })
    
    test('test action deleteTask', () => {
        const newState = appReducer(state, actions.deleteTask(0))
    
        expect(newState).toEqual({
            tasks: [
                {id: 0, header: 'Помыть машину', isCompleted: true}
            ],
            type: 'ALL'
        })
    })
    
    test('test action changeTask', () => {
        const newState = appReducer(state, actions.changeTask(0))
    
        expect(newState).toEqual({
            tasks: [
                {id: 0, header: 'Погулять с собакой', isCompleted: true},
                {id: 1, header: 'Помыть машину', isCompleted: true}
            ],
            type: 'ALL'
        })
    })
    
    test('test action changeType', () => {
        const newState = appReducer(state, actions.changeType('COMPLETED'))
    
        expect(newState).toEqual({
            tasks: [
                {id: 0, header: 'Погулять с собакой', isCompleted: false},
                {id: 1, header: 'Помыть машину', isCompleted: true}
            ],
            type: 'COMPLETED'
        })
    })
})

