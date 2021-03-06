import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  dropDown: {
    margin: 30,
    marginTop: 0
  }
});

export default function WarningTodo(props) {
  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <Typography variant="p">
          {props.title}
          </Typography>
        </AccordionSummary>
        <div className={classes.dropDown}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.subtitle}</Typography>
            <Typography display="inital">
            <List>
                {
                  props.todos.map((element, index) => 
                    (<ListItem key={index}><FontAwesomeIcon icon={faTint} pull="left" color="red" size="lg" />{element}</ListItem>)
                  )
                }
            </List>
            </Typography>
            <Typography variant="h6" >{props.warning}</Typography>
        </div>
      </Accordion>
    </div>
  );
}
