import React, { Component } from 'react';
import ItemContainer from '../containers/ItemContainer';
import TodosContainer from '../containers/TodosContainer';
import List from 'material-ui/List';

class Todos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let letlist = this.props.todos;
        switch (this.props.filter) {
            case 'all':
                letlist = this.props.todos;
                break;
            case 'completed':
                letlist = letlist.filter(item => item.completed)
                break;
            case 'active':
                letlist = letlist.filter(item => !item.completed)
                break;
            default:
                break;
        }
        return (
            <List style={{ 'width': 320, 'textAlign': 'center', margin: '0 auto' }}>
                {letlist.map((item, i) =>
                    <ItemContainer key={i} item={item} />
                )}
            </List>
        );
    }
}

export default Todos;
