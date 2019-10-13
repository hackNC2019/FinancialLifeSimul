import React from 'react';
import Button from 'react-bootstrap/Button';
import CollegeCards from '../Assets/CollegeCards'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './College.css'

class College extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            college: "",
            open: false,
            open2: false
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseTwo = this.handleCloseTwo.bind(this);
    }

    setOpen = () => {
        this.setState({college: "uni", open: true})
    }

    handleClick(type) {
        this.setState({college: type})
    }

    handleClose() {
        this.setState({open: false, open2: true})
    }
    handleCloseTwo() {
        this.setState({open2: false})
    }

    render() {
        if(this.state.college == "uni"){
            return(
                <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Pick a Major"}</DialogTitle>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Computer Science
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Journalism
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Biology
                    </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.open2}
                    onClose={this.handleCloseTwo}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Would you like to work a part-time job?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        A part-time job is a great way to make extra money on the side! Don't let it affect your work though...
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleCloseTwo} color="primary">
                        Yes
                    </Button>
                    <Button onClick={this.handleCloseTwo} color="primary" autoFocus>
                        No
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
            )
            
        }
        else{
            return(
                <div>
                    <h1>Choose a College</h1>
                    <div id = "collegecard-ctn">   
                        <CollegeCards title = "Four Year University" cost = "" setOpen = {this.setOpen}/>
                        <CollegeCards title = "Community College"/>
                        <CollegeCards title = "Trade School"/>
                        <CollegeCards title = "No College"/>
                    </div>
                    
                </div>
            );
        }
        
    
    }

}

export default College;