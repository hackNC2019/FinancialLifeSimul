import React from 'react';
import Button from 'react-bootstrap/Button';

class Main extends React.Component{
    handleClick = () => {
        console.log("main")
      }
    
      render() {
        return (
            <div className="App">
                Our Game ! Whatever it is called...
            <br />
            <Button onClick={this.handleClick}> Get Started </Button>
          </div>
        );
      }

}

export default Main;