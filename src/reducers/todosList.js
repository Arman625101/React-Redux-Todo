import { 
    ADD_TODO,
    DEL_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    SAVE_TODO, 
    FILTER_ALL,
    FILTER_COMPLETED,
    FILTER_ACTIVE
} from '../constants';

const initialState = [{
        id: 1,
        name: 'first todo',
        completed: true,
        editing: false
    },
    {
        id: 2,
        name: 'gqgqg qg',
        completed: false,
        editing: false
    }
];

const todosList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {name: action.name, id: state.length + 1, completed: false}];
        case DEL_TODO:
            return state.filter(item => action.id !== item.id);
        case COMPLETE_TODO:
            return state.map(item => item.id === action.id ? {...item, completed: !item.completed} : item)
        case EDIT_TODO:
            return state.map(item => item.id === action.id ? {...item, editing: !item.editing} : item)
        case SAVE_TODO:
            return state.map(item => item.id === action.id ? {...item, name: action.name, editing: !item.editing } : item)
        default:
            return state;
    }
}

export default todosList;