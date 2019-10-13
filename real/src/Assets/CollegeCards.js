import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './CollegeCards.css'

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.title,
            description: "yepeppepe",
            cost: "",
            chosen: "",
            open: false

        };
    
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick = () => {
        this.props.setOpen();
        this.setState({chosen: "4 year", open: true})
        
    }
    handleClose = () => {
        this.setState({open:false})
    }
    
    render() {
        if(this.state.chosen == ""){
            return (
                <div>
                <Card id = "collegecard">
                <CardActionArea onClick = {this.handleClick}>
                    <CardMedia
                    title={this.state.name}
                    />
                    <CardContent id = "cardcontent">
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.state.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                
                </div>
            );
        }
        
        
        
    
    }

}

export default Main;