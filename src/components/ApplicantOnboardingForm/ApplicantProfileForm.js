import React, { useState, useEffect } from "react";
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

  /* ********************* BEGIN FORM STATE AND SETTERS ********************* */

  /* active step keeps track of which child component the stepper function will render */
  const [activeStep, setActiveStep] = useState(0);

  /* The backend doesn't handle for this field but it is needed for the "Are you part of an organization?" checkbox in ApplicantContactInfo.js which indicates org status to dynamically render the next form shown to the user*/
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
  /* change this value to `true` to disable the button until user completes form - currently set to false for development purposes */
  const [disableButton, setDisableButton] = useState(true);

  /* state for handling error text when input validation is not met */
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

  /* ********************* END FORM STATE AND SETTERS ********************* */

  useEffect(() => {
    /* once the user has filled out all required form, `Next` button will be enabled (button is rendered in WriterProfileForm.js. need to explore a more performant solution */
    formState.first_name &&
      formState.last_name &&
      formState.city &&
      formState.state &&
      formState.zip &&
      formState.country &&
      setDisableButton(false);
  }, [
    formState.first_name,
    formState.last_name,
    formState.city,
    formState.state,
    formState.zip,
    formState.country,
  ]);

  /* ********************* BEGIN CHANGE HANDLERS ********************* */

  /* enableButton passed down as props to avoid `index.js:1 Warning: Cannot update a component (`ApplicantProfileForm`) while rendering a different component (`OrgInformation`). To locate the bad setState() call inside `OrgInformation`, follow the stack trace` when trying to enable the button in children forms by passing and invoking: `setDisableButton(false)` */
  const enableButton = () => setDisableButton(false);

  const handleOrgStatusChange = () => setOrgStatus(!orgStatus);

  const handleChanges = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    activeStep === 1 && setFormState({ ...formState, org: false });
    return setActiveStep(activeStep - 1);
  };

  /* ********************* END CHANGE HANDLERS ********************* */

  /* ********************* BEGIN SUBMIT HANDLERS ********************* */

  /* Submits all form data to the backend - only available at the end of the on boarding process*/
  const handleSubmit = async () => {
    try {
      await dispatch(postApplicantOnboarding(formState, Number(userId)));
      return history.push("/profile");
    } catch (err) {
      alert(err);
    }
  };
  /* ********************* END SUBMIT HANDLERS ********************* */

  /* ********************* BEGIN INPUT VALIDATION ********************* */
  const handleValidation = (e) => {
    /* validation function handles all inputs where the only validation is that the string must be greater than 2 */
    const validator = async (formValue) => {
      /*persisting the event to ensure it makes it to validation */
      e.persist();
      /* checks to see if user input is greater than 2 characters */
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

  /* children components render different forms as user moves through the registration process. getStepContent is invoked in the return of this component and passed the activeStep slice of state which is being changed by the handle submit of the back and next buttons. All the prop drilling is because the Review form needs access to all the props, might be worth moving to global state to clean the code up */
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
            enableButton={enableButton}
          />
        );
      case 1:
        /* Checking to see if the user is part of an org to give them the appropriate form next. Might have made more sense to just dynamically render the fields in one form, rather than two. Current implementation works but might be nice to refactor for cleanliness sake. */
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
            alternativeLabel
            activeStep={activeStep}
            className={classes.stepper}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {/* switch statement controlling which child form component is rendering based on the activeStep state */}
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
                /* dynamically rendering which submit handler is applied, as long as the user has more steps to complete the button will handle next. Once the user moves fully through the process the button will handle submitting the values */
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
