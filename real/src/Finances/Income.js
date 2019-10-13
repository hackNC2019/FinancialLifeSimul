import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Income extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    render(){
        const classes = {
            card: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            }
          };
        return(
        <Card style={classes.card}>
        <CardActionArea>
          <CardMedia
            image="https://img.icons8.com/plasticine/400/000000/economic-improvement.png"
            title="Income"
            style= {classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Income
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Your current amount of Income: ${this.state.value}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Do something
          </Button>
          <Button size="small" color="primary">
            Do something Else
          </Button>
        </CardActions>
      </Card>
        );
    }
}
export default Income;
