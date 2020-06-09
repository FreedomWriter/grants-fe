import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postWriterOboarding } from "../../store/actions/onboardingActions";
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
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "./WriterForm.styles";
import { postWorkHistory } from "../../store/actions/workActions";

/* this is the array of what will be the labels for each step in the process*/
const steps = ["Contact", "Education", "Work History", "Bio", "Review"];
export default function WriterProfileForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const userId = useSelector((state) => state.login.user.id);
  const workHistory = useSelector((state) => state.onboarding.workHistory);
  // active step keeps track of which child component will render
  const [activeStep, setActiveStep] = useState(0);
  /* change this value to `true` to disable the button until user completes form - currently set to false for development purposes */
  const [disableButton, setDisableButton] = useState(true);
  const [disableCollegeSubmitButton, setDisableCollegeSubmitButton] = useState(
    true
  );
  const [
    disableWorkHistorySubmitButton,
    setDisableWorkHistorySubmitButton,
  ] = useState(true);
  /* enableButton passed down as props to avoid `index.js:1 Warning: Cannot update a component (`ApplicantProfileForm`) while rendering a different component (`OrgInformation`). To locate the bad setState() call inside `OrgInformation`, follow the stack trace` when trying to enable the button in children forms by passing and invoking: `setDisableButton(false)` */
  const enableButton = () => setDisableButton(false);
  /* ********************* BEGIN FORM STATE AND SETTERS ********************* */
  /* states for each form rendered from this component. rendered here in the parent so the final review form will have access */
  const [contactFormState, setContactFormState] = useState({
    first_name: "",
    last_name: "",
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
    start_date: "",
    end_date: "",
    current_position: true,
    responsibilities: "",
    writer_id: userId,
  });
  const [bioFormState, setBioFormState] = useState({
    website: "",
    bio: "",
    servicesOffered: "",
  });
  /* because users may have attended more than one school, we are currently using a separate state to handle this. REFACTOR to use psuedo POST to global state */
  const [writersColleges, setWritersColleges] = useState([]);
  const [writersWorkHistory, setWritersWorkHistory] = useState([]);
  /* state for handling error text when input validation is not met */
  const [formHelperText, setFormHelperText] = useState({
    first_name: undefined,
    last_name: undefined,
    sector: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    country: undefined,
    website: undefined,
    bio: undefined,
    company: undefined,
    postion: undefined,
    responsibilities: undefined,
  });
  /* ********************* END FORM STATE AND SETTERS ********************* */
  /* ********************* BEGIN CHANGE HANDLERS ********************* */
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
    setWorkHistoryFormState({
      ...workHistoryFormState,
      [e.target.name]: e.target.value,
    });
  };
  /* ********************* END CHANGE HANDLERS ********************* */
  /* ********************* BEGIN SUBMIT HANDLERS ********************* */
  /* submit all form values after rendering WriterReviewForm - handler is invoked dynamically based on which form user is currently viewing */
  const handleSubmit = async () => {
    try {
      await dispatch(
        postWriterOboarding(
          userId,
          {
            ...contactFormState,
            website: bioFormState.website,
            bio: bioFormState.bio,
          },
          Number(userId)
        )
      );
      return history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setDisableButton(true);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  /* currently sets users values to writersColleges state, which holds an array, allowing for multiple colleges per writer and clears educationFormState, REFACTOR ties into refactor in WriterProfileForm.js line 66  */
  const handleCollegeSubmit = () => {
    setWritersColleges([
      ...writersColleges,
      {
        id: uuidv4(),
        college: educationFormState.college,
        startDate: educationFormState.startDate,
        endDate: educationFormState.endDate,
        stillAttending: educationFormState.stillAttending,
        anticipatedGraduation: educationFormState.anticipatedGraduation,
        degree: educationFormState.degree,
      },
    ]);
    setEducationFormState({
      college: "",
      searchCollege: "",
      startDate: "",
      endDate: "",
      stillAttending: true,
      anticipatedGraduation: "",
      degree: "",
    });
    enableButton();
  };

  const handleWorkHistorySubmit = async () => {
    /* ensures no keys with the value of "" get sent to the back end as that will cause it to error out, this would be a problem in the event that a position is a current one, so the user would not update the intial state of workHistoryFormState.end_date*/

    let data = {};
    for (const property in workHistoryFormState) {
      if (workHistoryFormState[property] !== "") {
        data[property] = workHistoryFormState[property];
      }
    }

    await dispatch(postWorkHistory(userId, data));
    setWritersWorkHistory(workHistory);
    return setWorkHistoryFormState({
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      current_position: true,
      responsibilities: "",
      writer_id: userId,
    });
  };

  /* ********************* END SUBMIT HANDLERS ********************* */
  /* ********************* BEGIN INPUT VALIDATION ********************* */
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
      case "first_name":
        validator(contactFormState.first_name);
        break;
      case "last_name":
        validator(contactFormState.last_name);
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
      case "company":
        validator(workHistoryFormState.company);
        break;
      case "position":
        validator(workHistoryFormState.position);
        break;
      case "responsibilities":
        validator(workHistoryFormState.responsibilities);
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
  /* ********************* END INPUT VALIDATION ********************* */
  /* ********************* BEGIN STEP HANDLER ********************* */

  /* children components render different forms as user moves through the registration process. getStepContent is invoked in the return of this component and passed the activeStep slice of state which is being changed by the handle submit of the back and next buttons. All the prop drilling is because the Review form needs access to all the props, might be worth moving to global state to clean the code up */

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <WriterContactInfoForm
            contactFormState={contactFormState}
            handleContactChanges={handleContactChanges}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            enableButton={enableButton}
          />
        );
      case 1:
        return (
          <WriterEducationForm
            handleCollegeSubmit={handleCollegeSubmit}
            handleEducationChanges={handleEducationChanges}
            educationFormState={educationFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setEducationFormState={setEducationFormState}
            writersColleges={writersColleges}
            setWritersColleges={setWritersColleges}
            disableCollegeSubmitButton={disableCollegeSubmitButton}
            setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
            enableButton={enableButton}
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
            enableButton={enableButton}
            handleWorkHistorySubmit={handleWorkHistorySubmit}
            writersWorkHistory={writersWorkHistory}
            setWritersWorkHistory={setWritersWorkHistory}
            disableWorkHistorySubmitButton={disableWorkHistorySubmitButton}
            setDisableWorkHistorySubmitButton={
              setDisableWorkHistorySubmitButton
            }
          />
        );
      case 3:
        return (
          <WriterBioForm
            handleBioChanges={handleBioChanges}
            setBioFormState={setBioFormState}
            bioFormState={bioFormState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            enableButton={enableButton}
          />
        );
      case 4:
        return (
          <WriterReview
            contactFormState={contactFormState}
            handleContactChanges={handleContactChanges}
            educationFormState={educationFormState}
            setEducationFormState={setEducationFormState}
            handleEducationChanges={handleEducationChanges}
            writersColleges={writersColleges}
            setWritersColleges={setWritersColleges}
            handleCollegeSubmit={handleCollegeSubmit}
            setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
            disableCollegeSubmitButton={disableCollegeSubmitButton}
            workHistoryFormState={workHistoryFormState}
            setWorkHistoryFormState={setWorkHistoryFormState}
            handleWorkHistoryChanges={handleWorkHistoryChanges}
            handleWorkHistorySubmit={handleWorkHistorySubmit}
            disableWorkHistorySubmitButton={disableWorkHistorySubmitButton}
            setDisableWorkHistorySubmitButton={
              setDisableWorkHistorySubmitButton
            }
            bioFormState={bioFormState}
            setBioFormState={setBioFormState}
            handleBioChanges={handleBioChanges}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            enableButton={enableButton}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
  /* ********************* END STEP HANDLER ********************* */
  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="primary"
          >
            Create Profile
          </Typography>
          {/* the stepper handles visual marker the user sees that shows them their progress in the process */}
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
            data-testid="stepper"
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
