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

  /* change this value to `true` to disable the button until user completes form - currently set to false for development purposes */
  const [disableButton, setDisableButton] = useState(false);

  /* states for each form rendered from this component. rendered here in the parent so the final review form will have access */
  const [contactFormState, setContactFormState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [educationFormState, setEducationFormState] = useState({
    college: "",
    searchCollege: "",
    startDate: "",
    endDate: "",
    stillAttending: false,
    anticipatedGraduation: "",
    degree: "",
  });

  const [workHistoryFormState, setWorkHistoryFormState] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    currentPosition: true,
    responsibilites: "",
  });

  const [bioFormState, setBioFormState] = useState({
    website: "",
    bio: "",
  });

  /* state for handling error text when input validation is not met */
  const [formHelperText, setFormHelperText] = useState({
    firstName: undefined,
    lastName: undefined,
    sector: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    country: undefined,
    website: undefined,
    bio: undefined,
  });

  /* multiple change handlers because each one sets state for a different form. rendered here in the parent so the final review form will have access */
  const handleBioChanges = (e) => {
    setBioFormState({
      ...bioFormState,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactChanges = (e) => {
    setContactFormState({
      ...contactFormState,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationChanges = (e) => {
    setEducationFormState({
      ...educationFormState,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkHistoryChanges = (e) => {
    setEducationFormState({
      ...educationFormState,
      [e.target.name]: e.target.value,
    });
  };

  /* submit all form values after rendering WriterReviewForm - handler is invoked dynamically based on which form user is currently viewing*/
  const handleSubmit = () => {
    console.log(`Sumbit form values: `);
  };

  const handleValidation = (e) => {
    // validation function handles all inputs where the only validation is that the string must be greater than 2
    const validator = (formValue) => {
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
    /* handling input validation based on input id and setting error message to be rendered via helperText*/
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
          bioFormState.website
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
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
          />
        );
      case 1:
        return (
          <WriterEducationForm
            handleEducationChanges={handleEducationChanges}
            educationFormState={educationFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setEducationFormState={setEducationFormState}
            setDisableButton={setDisableButton}
          />
        );
      case 2:
        return (
          <WriterWorkHistoryForm
            handleWorkHistoryChanges={handleWorkHistoryChanges}
            workHistoryFormState={workHistoryFormState}
            setWorkHistoryFormState={setWorkHistoryFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
          />
        );
      case 3:
        return (
          <WriterBioForm
            handleBioChanges={handleBioChanges}
            bioFormState={bioFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setDisableButton={setDisableButton}
          />
        );
      case 4:
        return (
          <WriterReview
            handleBioChanges={handleBioChanges}
            contactFormState={contactFormState}
            handleContactChanges={handleContactChanges}
            setEducationFormState={setEducationFormState}
            setDisableButton={setDisableButton}
            handleEducationChanges={handleEducationChanges}
            educationFormState={educationFormState}
            bioFormState={bioFormState}
            formHelperText={formHelperText}
            setBioFormState={setBioFormState}
            handleValidation={handleValidation}
            handleWorkHistoryChanges={handleWorkHistoryChanges}
            workHistoryFormState={workHistoryFormState}
            setWorkHistoryFormState={setWorkHistoryFormState}
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

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create Profile
          </Typography>
          {/* the stepper handles visual marker the user sees that shows them their progress in the process */}
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
