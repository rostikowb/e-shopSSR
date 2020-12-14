import React from "react";
import {makeStyles, Accordion, Typography, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  root: {
    // width: "auto",
    height: "30px",
    "min-height": "30px",
    // height: "25px"
    padding: "0 22px 0 8px"
  },

  expanded: {
    "min-height": "30px!important",
  },

  rounded: {
    borderRadius: 0
  },

  // },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    padding: "8px 22px 16px"
  },
  title:{
    fontSize: "15px"
  }
}));

export const FilterAcordion = (props) => {

  const classes = useStyles();

  return (
    <div key={"filLab" + props.info.title}>
      <Accordion
        square={true}
        // className={classes.rounded}
        // root={classes.root}
        defaultExpanded={true}
        // expanded={true}
        // TransitionProps={{ unmountOnExit: !props.info?.render }}
      >
        <AccordionSummary
          className={classes.root + ' ' + classes.expanded}
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id={"panel1a-header" + props.info.title}
        >
          <Typography classes={{root: classes.title}} className={classes.heading}>
            {props.info.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails classes={{root: classes.details}}>{props.info.content}</AccordionDetails>
      </Accordion>
    </div>
  );
};
