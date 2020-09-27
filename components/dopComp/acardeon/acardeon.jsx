import React from "react";
import {makeStyles, Accordion, Typography, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Acordeon = (props) => {
  // console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion
        defaultExpanded={props.info.open}
        TransitionProps={{ unmountOnExit: !props.info?.render }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {props.info.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.info.content}</AccordionDetails>
      </Accordion>
    </div>
  );
};
