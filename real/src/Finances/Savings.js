import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './FinancialPanel.css'


class Savings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    render(){
        return(
        <Card className= "finstatus">
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Savings
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ${this.state.value}
            </Typography>
          </CardContent>
      </Card>
        );
    }
}
export default Savings;
