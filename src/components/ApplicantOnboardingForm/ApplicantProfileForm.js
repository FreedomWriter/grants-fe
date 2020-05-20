import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postApplicantOnboarding } from "../../store/actions/onboardingActions";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ApplicantContactInfo from "./ApplicantContactInfo";
import OrgInformation from "./OrgInformation";
import NonOrgInformation from "./NonOrgInformation";
import Review from "./ApplicantReviewForm";

import { useStyles } from "./ApplicantForm.styles";

const steps = [
  "Contact Information",
  "Additional Information",
  "Review your profile",
];

export default function ApplicantProfileForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const userId = useSelector((state) => state.login.user.id);
  // active step keeps track of which child component will render
  const [activeStep, setActiveStep] = useState(0);
  const [orgStatus, setOrgStatus] = useState(false);
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    sector: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    org_name: "",
    founding_date: null,
    website: "",
    bio: "",
  });
  // state for handling error text when input validation is not met
  const [formHelperText, setFormHelperText] = useState({
    first_name: undefined,
    last_name: undefined,
    sector: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    country: undefined,
    org_name: undefined,
    founding_date: undefined,
    website: undefined,
    bio: undefined,
  });

  const handleOrgStatusChange = () => setOrgStatus(!orgStatus);

  const handleChanges = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      await dispatch(postApplicantOnboarding(formState, Number(userId)));
      return history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const handleValidation = (e) => {
    // validation function handles all inputs where the only validation is that the string must be greater than 2
    const validator = async (formValue) => {
      //persisting the event to ensure it makes it to validation
      e.persist();
      let valid = /(?=(?:.*?[a-z]){2})/i.test(formValue);
      if (!valid) {
        setFormHelperText({
          ...formHelperText,
          [e.target.name]: "Must be at least 2 characters long",
        });
      } else {
        setFormHelperText({
          ...formHelperText,
          [e.target.name]: undefined,
        });
      }
    };
    // handling input validation
    switch (e.target.id) {
      case "first_name":
        validator(formState.first_name);
        break;
      case "last_name":
        validator(formState.last_name);
        break;
      case "sector":
        validator(formState.sector);
        break;
      case "city":
        validator(formState.city);
        break;
      case "state":
        validator(formState.state);
        break;
      case "country":
        validator(formState.country);
        break;
      case "org_name":
        validator(formState.org_name);
        break;
      case "zip":
        let valid = /(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/.test(formState.zip);
        if (!valid) {
          setFormHelperText({
            ...formHelperText,
            [e.target.name]: "Please enter a valid 6 digit US zipcode",
          });
        } else {
          setFormHelperText({
            ...formHelperText,
            [e.target.name]: undefined,
          });
        }
        break;
      case "website":
        let validWeb = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(
          formState.website
        );
        if (!validWeb) {
          setFormHelperText({
            ...formHelperText,
            [e.target.name]: "Please enter a valid website address",
          });
        } else {
          setFormHelperText({
            ...formHelperText,
            [e.target.name]: undefined,
          });
        }
        break;
      default:
        break;
    }
  };

  // children components render different forms as user moves through the registration process
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ApplicantContactInfo
            formState={formState}
            handleChanges={handleChanges}
            setFormState={setFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            orgStatus={orgStatus}
            handleOrgStatusChange={handleOrgStatusChange}
          />
        );
      case 1:
        return orgStatus ? (
          <OrgInformation
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
          />
        ) : (
          <NonOrgInformation
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
          />
        );
      case 2:
        return (
          <Review
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
            formState={formState}
            formHelperText={formHelperText}
            setFormState={setFormState}
            handleValidation={handleValidation}
            orgStatus={orgStatus}
            handleOrgStatusChange={handleOrgStatusChange}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    activeStep === 1 && setFormState({ ...formState, org: false });
    return setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Profile
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                // dynamically rendering which submit handler is applied
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
                className={classes.button}
              >
                {/* dynamically render button based on active steps */}
                {activeStep === steps.length - 1 ? "Submit Profile" : "Next"}
              </Button>
            </div>
          </>
        </Paper>
      </main>
    </>
  );
}
