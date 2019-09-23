import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { fontFamily } from "@material-ui/system"

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    margin: "0 auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightRegular,
    color: "white",
  },

  acordion: {
    backgroundColor: "#D4AF37",
    marginBottom: "10px",
  },

  textArea: {
    backgroundColor: "white",
    fontSize: theme.typography.pxToRem(35),
    fontFamily: "Raleway",
  },

  text: {
    fontSize: "21px",
  },
}))

const Accordion = ({ title, text }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.acordion}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Event Management</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.textArea}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.acordion}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Project Management
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.textArea}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.acordion}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Leadership Development
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.textArea}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Accordion
