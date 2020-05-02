import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WriterContactInfoForm from "./WriterContactInfoForm";
import WriterEducationForm from "./WriterEducationForm";
import WriterWorkHistoryForm from "./WriterWorkHistoryForm";
import WriterBioForm from "./WriterBioForm";
import WriterReview from "./WriterReviewForm";

import { useStyles } from "./WriterForm.styles";

const steps = ["Contact", "Education", "Work History", "Bio", "Review"];

export default function ApplicantProfileForm() {
  const classes = useStyles();
  // active step keeps track of which child component will render
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
  const [disableButton, setDisableButton] = useState(true);
  const [contactFormState, setContactFormState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // state for handling error text when input validation is not met
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
    college: undefined,
    searchCollege: undefined,
  });

  const handleChanges = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactChanges = (e) => {
    setContactFormState({
      ...contactFormState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(`Sumbit form values: `, formState);
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
      case "firstName":
        validator(contactFormState.firstName);
        break;
      case "lastName":
        validator(contactFormState.lastName);
        break;
      case "city":
        validator(contactFormState.city);
        break;
      case "state":
        validator(contactFormState.state);
        break;
      case "country":
        validator(contactFormState.country);
        break;
      case "zip":
        let valid = /(^\d{5}(?:[\s]?[-\s][\s]?\d{4})?$)/.test(
          contactFormState.zip
        );
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
          <WriterContactInfoForm
            contactFormState={contactFormState}
            handleContactChanges={handleContactChanges}
            setFormState={setFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
          />
        );
      case 1:
        return (
          <WriterEducationForm
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setFormState={setFormState}
            setDisableButton={setDisableButton}
          />
        );
      case 2:
        return (
          <WriterWorkHistoryForm
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
          />
        );
      case 3:
        return (
          <WriterBioForm
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
          />
        );
      case 4:
        return (
          <WriterReview
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
            formState={formState}
            formHelperText={formHelperText}
            setFormState={setFormState}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
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
    setActiveStep(activeStep - 1);
  };

  // buttonIsDisabled(contactFormState);
  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Profile
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
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
                disabled={disableButton}
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
