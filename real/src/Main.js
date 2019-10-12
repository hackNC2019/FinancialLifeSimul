import React from 'react';
import Button from 'react-bootstrap/Button';
import College from './Events/College'

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState({clicked: true})
    }
    
    render() {
        if(!this.state.clicked) {
        return (
            <div className="App">
                Our Game ! Whatever it is called...
                <br />
                <Button onClick={this.handleClick}> Get Started </Button>
            </div>
        );
        }
        else{
        return (
            <College />
        )
        }
    
    }

}

export default Main;