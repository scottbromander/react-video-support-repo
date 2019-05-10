import React, { Component } from 'react';

class Dog extends Component {

    render() {
        return (
            <div>
                <p>Dog {this.props.dogNumber} name is {this.props.dogName}</p>
                <button data-id={this.props.dogNumber} onClick={this.props.woofClick}>Woof</button>
            </div>
        )
    }
}

export default Dog;