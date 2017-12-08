import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Delete from 'material-ui-icons/Delete';
import Edit from 'material-ui-icons/Edit';
import Done from 'material-ui-icons/Done'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    deleteItem = id => e => {
        this.props.onDelete(id);
    }
    handleEdit = (id, name) => e => {
        this.setState({ name });
        this.props.onEdit(id);
    }
    saveItem = (id, name) => e => {
        const item = { id, name };
        this.props.onSave(item);
    }
    completeItem = id => e => {
        this.props.onComplete(id);
    }
    render() {
        const completed = { 'textDecoration': 'line-through' }
        const { item } = this.props;
        return (
            <ListItem button>
                <ListItemIcon>
                    <Delete style={{ 'margin': 0 }} onClick={this.deleteItem(item.id)} />
                </ListItemIcon>
                {item.editing
                    ? <TextField
                        style={{ 'width': '100%', 'textAlign': 'center' }}
                        value={this.state.name}
                        onChange={this.handleChange} />
                    : <ListItemText
                        onClick={this.completeItem(item.id)}
                        style={item.completed ? completed : null}
                        primary={item.name} />
                }
                <ListItemIcon>
                    {item.editing
                        ? <Done style={{ 'margin': 0 }} onClick={this.saveItem(item.id, this.state.name)} />
                        : <Edit style={{ 'margin': 0 }} onClick={this.handleEdit(item.id, item.name)} />
                    }
                </ListItemIcon>
            </ListItem>
        );
    }
}

export default Item;
