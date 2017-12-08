import { connect } from 'react-redux';
import NewItem from '../components/NewItem';
import { addTodo } from '../actions';

const mapStateToProps = state => ({
    todos: state
})
const mapDispatchToProps = dispatch => ({
    onAdd: name => dispatch(addTodo(name))
})
const NewItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewItem);
export default NewItemContainer;