import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { filterBy } from '../actions';

const mapStateToProps = state => ({
    todos: state
})
const mapDispatchToProps = dispatch => ({
    onFilter: payload => dispatch(filterBy(payload))
})

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;