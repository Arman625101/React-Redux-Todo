import { connect } from 'react-redux';
import Item from '../components/Item';
import { deleteTodo, completeTodo, editTodo, saveTodo } from '../actions';

const mapStateToProps = state => ({
    todos: state
})
const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteTodo(id)),
    onComplete: id => dispatch(completeTodo(id)),
    onEdit: id => dispatch(editTodo(id)),
    onSave: item => dispatch(saveTodo(item))
})

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);
export default ItemContainer;