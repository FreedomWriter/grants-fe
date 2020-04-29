import React, { useState } from "react";
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
import Review from "./ReviewForm";

import { useStyles } from "./ApplicantForm.styles";

const steps = [
  "Contact Information",
  "Additional Information",
  "Review your profile",
];

export default function ApplicantProfileForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    sector: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    org: false,
    orgName: "",
    foundingDate: "",
    website: "",
    bio: "",
  });

  const [formHelperText, setFormHelperText] = useState({
    firstName: undefined,
    lastName: undefined,
    sector: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    country: undefined,
    orgName: undefined,
    foundingDate: undefined,
    website: undefined,
    bio: undefined,
  });

  const handleChanges = (e) => {
    e.persist();

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    const validator = async (formValue) => {
      e.persist();
      let valid = /(?=(?:.*?[a-z]){1})/i.test(formValue);
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
    switch (e.target.id) {
      case "firstName":
        validator(formState.firstName);
        break;
      case "lastName":
        validator(formState.lastName);
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
      case "orgName":
        validator(formState.orgName);
        break;
      case "zip":
        let valid = /(^\d{4}(?:[\s]?[-\s][\s]?\d{4})?$)/.test(formState.zip);
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
  const handleSubmit = () => {
    console.log(`Sumbit form values: `, formState);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ApplicantContactInfo
            formState={formState}
            handleChanges={handleChanges}
            setFormState={setFormState}
            formHelperText={formHelperText}
          />
        );
      case 1:
        return formState.org ? (
          <OrgInformation
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
          />
        ) : (
          <NonOrgInformation
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
          />
        );
      case 2:
        return (
          <Review
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
            formState={formState}
            formHelperText={formHelperText}
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
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Submit Profile" : "Next"}
              </Button>
            </div>
          </>
        </Paper>
      </main>
    </>
  );
}
