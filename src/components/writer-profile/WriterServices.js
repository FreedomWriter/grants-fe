import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Tabs,
  Tab,
  Box,
  Typography
}from "@material-ui/core";
import { useStyles } from "./writerProfile.styles.js";

const WriterServices = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (

    <div className={classes.userServices}>
            <h3 className={classes.userEducation}>Services Offered:</h3>
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
  );
};

export default WriterServices;