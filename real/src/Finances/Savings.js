import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Savings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    render(){
        const classes = makeStyles({
            card: {
                maxWidth: 15,
            },
            media: {
                height: 140,
            }
        });
        return(
        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="icons8-stack-of-money-48.png"
            title="Savings"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Savings
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Your current amount of Savings: ${this.state.value}
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
export default Savings;
// const useStyles = makeStyles({
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });

// export default function SavingsCard() {
//     const classes = useStyles();
//     return (
//         <Card className={classes.card}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image="real/src/Assets/icons8-stack-of-money-48.png"
//             title="Savings"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Savings
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               This Card tracks your current amount of Savings.
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     );
// }