import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleChange(e) {
        const val = e.target.value;
        val ? this.setState({ name: val }) : null;
    }
    handleAdd = name => event => {
        this.props.onAdd(name.trim());
        this.setState({ name: '' });
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <TextField onChange={this.handleChange} value={name} />
                <Button color="primary" raised disabled={!name} onClick={this.handleAdd(name)}>Add</Button>
            </div>
        );
    }
}

export default NewItem;
