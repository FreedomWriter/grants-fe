import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./writerProfile.styles.js";
import { useStyles as workStyles } from "../WriterOnboardingForms/WriterForm.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { getWriterInfo } from "../../store/actions/profileActions.js";
import Loader from "../loader/Loader.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

const WriterProfile = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const workClasses = workStyles();

  //Redux
  const writer = useSelector((state) => state.profileInfo.profileDetails);
  const userId = useSelector((state) => state.login.userId);
  useEffect(() => {
    dispatch(getWriterInfo(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  //

  const preventDefault = (event) => event.preventDefault();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StylesProvider>
      <GlobalCSS />
      {writer ? (
        <Paper classes={{ root: classes.rootPaper }} elevation={3}>
          {" "}
          <div>
            <AccountCircleIcon
              classes={{ root: classes.rootIcon }}
              fontSize="large"
            />
            {writer && (
              <div className={classes.userName}>
                {" "}
                {writer.first_name}
                {writer.last_name}
              </div>
            )}
            <Button
              classes={{ root: classes.rootButton, label: classes.labelButton }}
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Direct Message
            </Button>
            {writer && (
              <Link
                classes={{ root: classes.rootLink }}
                href="#"
                onClick={preventDefault}
              >
                {writer.website}
              </Link>
            )}
          </div>
          {writer && (
            <h3 className={classes.userEducation}>
              Bio:
              <div className={classes.bodyText}>{writer.bio}</div>
            </h3>
          )}
          <div></div>
          <h3 className={classes.userEducation}>
            Background:
            <div className={classes.educationText}>
              Education:<div className={classes.bodyText}>USC 2010-2014</div>
            </div>
            {/* <div className={classes.educationText}>
              Work History:
              <div className={classes.bodyText}>DSC 2010-2014</div>
            </div> */}
          </h3>
          <div></div>
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
          <h3 className={classes.finalGrid}>
            Work History:
            {writer &&
              writer.workHistory &&
              writer.workHistory.map((writersWorkHistory) => (
                <Card
                  className={workClasses.cardRoot}
                  key={writersWorkHistory.id}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      className={workClasses.title}
                      color="textSecondary"
                      gutterBottom
                      data-testid="company-header"
                    >
                      Company
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {writersWorkHistory.company}
                    </Typography>
                    <Typography
                      className={workClasses.pos}
                      color="textSecondary"
                      data-testid="position-header"
                    >
                      Position: {writersWorkHistory.position}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Start Date: {writersWorkHistory.start_date}
                      <br />
                      {writersWorkHistory.current_position === "true"
                        ? `Current Position`
                        : `End Date: ${writersWorkHistory.end_date}`}
                    </Typography>
                    <Typography
                      className={workClasses.pos}
                      color="textSecondary"
                    >
                      responsibilities: {writersWorkHistory.responsibilities}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </h3>
        </Paper>
      ) : (
        <Loader />
      )}
    </StylesProvider>
  );
};

export default WriterProfile;
