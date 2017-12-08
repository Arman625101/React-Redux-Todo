import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.filterItem = this.filterItem.bind(this);
    }
    filterItem = type => e => {
        this.props.onFilter(type);
    }
    render() {
        return (
            <div style={{'margin':'12px 0'}}>
                <Button raised dense onClick={this.filterItem('all')}>
                    ALL
                </Button>
                <Button raised dense onClick={this.filterItem('completed')}>
                    COMPLETED
                </Button>
                <Button raised dense onClick={this.filterItem('active')}>
                    ACTIVE
                </Button>
            </div>
        );
    }
}

export default Filter;
