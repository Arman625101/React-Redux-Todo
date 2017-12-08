import React, { Component } from 'react';
import TodosContainer from '../containers/TodosContainer';
import NewItemContainer from '../containers/NewItemContainer';
import FilterContainer from '../containers/FilterContainer';

class App extends Component {

    render() {
        return (
            <div style={{'textAlign':'center'}}>
                <NewItemContainer />
                <FilterContainer />
                <TodosContainer />
            </div>
        );
    }
}

export default App;