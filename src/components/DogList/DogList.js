import React, { Component } from 'react';
import Dog from '../Dog/Dog';

class DogList extends Component {

    render() {
        const htmlDogList = this.props.dogList.map((item, index) => {
            return (
                <Dog key={index} dogNumber={index} dogName={item} woofClick={this.props.woofClick} />
            )
        })

        return (
            <div>
                {htmlDogList}
            </div>
        )
    }
}

export default DogList;