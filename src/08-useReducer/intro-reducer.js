//! 1) INITIAL STATE
const initialState = [{
    id: 1,
    todo: "recolectar la priedra del Alma",
    done: false
}];

//! 2) CREAR REDUCER const todoReducer = (state,action) => { }
const todoReducer = (state = initialState, action = {}) => {

    //! 7) REGRESAMOS EL NUEVO ESTADO AL REDUCER
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }

    return state;
}

//! 3) UTILIZAR EL REDUCER
let todos = todoReducer()

//! 4) AGREGAR NUEVO TODO: 
const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del Poder",
    done: false
}

//! 5) CREAR LA NUEVA ACCION PARA AGREGAR EL NUEVO TODO
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

//! 6) VOLVEMOS A LLAMAR EL REDUCER CON EL NUEVO ESTADO Y LA NUEVA ACCION
todos = todoReducer(todos, addTodoAction)

console.log({ state: todos });