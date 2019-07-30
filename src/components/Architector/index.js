import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 'auto',
    width: 200,
    height: 200,
  },
});

export default function Architector(props) {
    // const { fullName, yearsOfLife, imageUrl, description } = props.architector;
    // test data
    const architector = {
      fullName: "Генрих Юлиан Гай",
      yearsOfLife: "10 января 1875 — 3 октября 1936",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Architect_Langbard_Iosif_Grigorevich.jpg",
      description: "Архитектор и инженер польского происхождения, который в начале XX века. работал в Российской империи, а потом в Польше. Работал в стиле неоклассицизма. Автор проектов многих зданий в Варшаве, Минске, Киеве и в других местах Российской империи. В межвоенный период — воеводской архитектор в Пинске."
    }
    const { fullName, yearsOfLife, imageUrl, description } = architector;
    
    const classes = useStyles();
    return (
      <Container maxWidth="md">
        <Avatar alt={fullName} src={imageUrl} className={classes.bigAvatar} />
        <Typography align='center' variant='h4'>{fullName}</Typography>
        <Typography align='center' variant='h5'>({yearsOfLife})</Typography>
        <Typography align='justify' variant='subtitle1'>{description}</Typography>
      </Container>
      
    );  
}