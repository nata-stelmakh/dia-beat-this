import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HBSTodo from "./HighSugarTodo";

const useStyles = makeStyles({
  root: {
    width: 450
  },
  media: {
    height: 140,
  },
  // toDo: {
  //   width: "100%"
  // }
});

export default function WarningCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6"  color="secondary">
            Warning!
          </Typography>
          <Typography variant="h5"> Your blood sugar is {props.level}!</Typography>
          </CardContent>
          <CardActionArea>
          <HBSTodo className={classes.toDo}/>
          </CardActionArea>


    </Card>
  );
}
