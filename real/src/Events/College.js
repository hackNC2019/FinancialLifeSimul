import React from 'react';
import Button from 'react-bootstrap/Button';

class College extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            college: ""
        };
    
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(type) {
        this.setState({college: type})
    }

    render() {
        if(this.state.college == "uni"){

        }
        if(this.state.college == "cc"){

        }
        if(this.state.college == "trade"){

        }
        if(this.state.college == "none"){

        }
        else{
            return(
                <div>
                    <h1 class='event-titles'>Choose a College</h1>
                    <Button onClick={() =>this.handleClick("uni")}>4 Year University</Button>
                    <Button onClick={() =>this.handleClick("cc")}>Community College</Button>
                    <Button onClick={() =>this.handleClick("trade")}>Trade School</Button>
                    <Button onClick={() =>this.handleClick("none")}>No University</Button>
                </div>
            );
        }
        
    
    }

}

export default College;