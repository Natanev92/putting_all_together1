import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthday: this.props.age
        };
    }

    haveBirthday = () => this.setState({birthday: this.state.birthday +1});
    
    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.birthday}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick={this.haveBirthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;