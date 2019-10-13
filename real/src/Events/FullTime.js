import React from 'react';

class FullTime extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
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
                    <h1>Choose a College</h1>
                    <div id = "collegecard-ctn">   
                        <CollegeCards title = "Four Year University" cost = ""/>
                        <CollegeCards title = "Community College"/>
                        <CollegeCards title = "Trade School"/>
                        <CollegeCards title = "No College"/>
                    </div>
                    
                </div>
            );
        }
        
    
    }

}

export default FullTime;