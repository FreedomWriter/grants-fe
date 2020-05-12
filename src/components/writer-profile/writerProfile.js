import React, { useEffect, useState } from "react";
import { StylesProvider, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./writerProfile.styles.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { fetchWriters } from "../../store/actions/writerProfileAction.js";

const GlobalCSS = withStyles({
  "@global": {
    ".MuiPaper-elevation2": {
      width: "80%",
      height: "auto",
      marginTop: "5%",
      marginBottom: "5%",
      marginLeft: "10%",
    },
  },
})(() => null);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function WriterProfile() {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StylesProvider>
      <GlobalCSS />
      <Paper classes={{ root: classes.rootPaper }} elevation={3}>
        {" "}
        <div>
          <AccountCircleIcon
            classes={{ root: classes.rootIcon }}
            fontSize="large"
          />
          <Typography
            variant="subtitle2"
            classes={{
              root: classes.rootUserName,
            }}
          >
            {" "}
            John Doe
          </Typography>
          <Button
            classes={{ root: classes.rootButton, label: classes.labelButton }}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Direct Message
          </Button>

          <Link
            classes={{ root: classes.rootLink }}
            href="#"
            onClick={preventDefault}
          >
            Visit my website
          </Link>
        </div>
        <h3 className={classes.userEducation}>
          Bio:
          <Typography variant="body1">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </h3>
        <div></div>
        <h3>
          Background:
          <Typography variant="subtitle2">
            Education:<Typography variant="body1">USC 2010-2014</Typography>
          </Typography>
          <Typography variant="subtitle2">
            Work History:<Typography variant="body1">DSC 2010-2014</Typography>
          </Typography>
        </h3>
        <div></div>
        <div className={classes.userServices}>
          <h3>Services Offered:</h3>
          <Paper>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Grant Writing" {...a11yProps(0)} />
              <Tab label="Grant Research" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </TabPanel>
            <TabPanel value={value} index={1}>
              This is just here to show you this works.
            </TabPanel>
          </Paper>
        </div>
        <h3 className={classes.finalGrid}>
          Portfolio:
          <Paper elevation={2}>text here</Paper>
          <Paper elevation={2}>text here</Paper>
          <Paper elevation={2}>text here</Paper>
        </h3>
      </Paper>
    </StylesProvider>
  );
}
