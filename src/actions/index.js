import {
    ADD_TODO,
    DEL_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    SAVE_TODO,
    FILTER_ALL,
    FILTER_COMPLETED,
    FILTER_ACTIVE,
    FILTER
} from '../constants';

export const addTodo = name => ({
    type: ADD_TODO,
    name
});
export const deleteTodo = id => ({
    type: DEL_TODO,
    id
})
export const completeTodo = id => ({
    type: COMPLETE_TODO,
    id
})
export const editTodo = id => ({
    type: EDIT_TODO,
    id
})
export const saveTodo = item => ({
    type: SAVE_TODO,
    id: item.id,
    name: item.name
})
export const filterBy = param => ({
    type: FILTER,
    payload: param
})