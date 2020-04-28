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
    org: true,
    orgName: "",
    foundingDate: "",
    website: "",
    bio: "",
  });

  const handleChanges = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
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
          />
        );
      case 1:
        return formState.org ? (
          <OrgInformation handleChanges={handleChanges} formState={formState} />
        ) : (
          <NonOrgInformation
            handleChanges={handleChanges}
            formState={formState}
          />
        );
      case 2:
        return (
          <Review
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
            formState={formState}
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
    <React.Fragment>
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
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Welcome to Granted.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
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
                      activeStep === steps.length - 1
                        ? handleSubmit
                        : handleNext
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Submit Profile"
                      : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
