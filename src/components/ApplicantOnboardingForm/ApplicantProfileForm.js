import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import handleValidation from "./ApplicantFormValidation";
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
            setFormHelperText={setFormHelperText}
          />
        );
      case 1:
        return orgStatus ? (
          <OrgInformation
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setFormHelperText={setFormHelperText}
          />
        ) : (
          <NonOrgInformation
            handleChanges={handleChanges}
            formState={formState}
            formHelperText={formHelperText}
            handleValidation={handleValidation}
            setFormHelperText={setFormHelperText}
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
            setFormHelperText={setFormHelperText}
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
