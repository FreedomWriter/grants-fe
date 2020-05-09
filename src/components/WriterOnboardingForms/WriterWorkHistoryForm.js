import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";

import WriterWorkCard from "./WriterWorkCard";

import { useStyles } from "./WriterForm.styles";
export default function ApplicantContactInfo({
  handleWorkHistoryChanges,
  setWorkHistoryFormState,
  workHistoryFormState,
  formHelperText,
  handleValidation,
  handleWorkHistorySubmit,
  writersWorkHistory,
  // setWritersWorkHistory
  enableButton,
  disableWorkHistorySubmitButton,
  setDisableWorkHistorySubmitButton,
}) {
  const classes = useStyles();

  useEffect(() => {
    enableButton();
    /* handles whether the button to submit a work history is disabled based on required fields */
    if (
      workHistoryFormState.company.length > 1 &&
      workHistoryFormState.workStartDate.length > 1 &&
      workHistoryFormState.position.length > 1 &&
      workHistoryFormState.responsibilites.length > 1
    ) {
      if (workHistoryFormState.currentPosition === true) {
        return setDisableWorkHistorySubmitButton(false);
      } else if (workHistoryFormState.workEndDate.length > 5) {
        return setDisableWorkHistorySubmitButton(false);
      } else {
        return setDisableWorkHistorySubmitButton(true);
      }
    } else {
      setDisableWorkHistorySubmitButton(true);
    }
  }, [
    enableButton,
    workHistoryFormState.company,
    workHistoryFormState.workStartDate,
    workHistoryFormState.position,
    workHistoryFormState.responsibilites,
    workHistoryFormState.workEndDate,
    workHistoryFormState.currentPosition,
    setDisableWorkHistorySubmitButton,
  ]);
  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom color="primary">
        Work History
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.workEndDate ? true : undefined}
            onChange={handleWorkHistoryChanges}
            className={classes.orgTextField}
            required
            id="company"
            name="company"
            value={workHistoryFormState.company}
            label="Company"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.position ? true : undefined}
            onChange={handleWorkHistoryChanges}
            className={classes.orgTextField}
            required
            id="position"
            name="position"
            value={workHistoryFormState.position}
            label="Position"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.workStartDate ? true : undefined}
            helperText={
              formHelperText.workStartDate
                ? formHelperText.workStartDate
                : "Start Date*"
            }
            onChange={handleWorkHistoryChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="workStartDate"
            name="workStartDate"
            value={workHistoryFormState.workStartDate}
            aria-label="workStartDate"
          />
        </Grid>
        {!workHistoryFormState.currentPosition && (
          <Grid item xs={12}>
            <TextField
              onBlur={handleValidation}
              error={formHelperText.workEndDate ? true : undefined}
              onChange={handleWorkHistoryChanges}
              className={classes.orgTextField}
              type="date"
              required
              id="workEndDate"
              name="workEndDate"
              value={workHistoryFormState.workEndDate}
              aria-label="End Date"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="currentPosition"
                checked={workHistoryFormState.currentPosition}
              />
            }
            onClick={() =>
              setWorkHistoryFormState({
                ...workHistoryFormState,
                currentPosition: !workHistoryFormState.currentPosition,
              })
            }
            label="Current Position?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaAutosize
            onChange={handleWorkHistoryChanges}
            required
            id="responsibilites"
            name="responsibilites"
            value={workHistoryFormState.responsibilites}
            placeholder="What were your responsibilites..."
            aria-label="Position responsibilites"
            rowsMin={6}
            className={classes.textArea}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            size="small"
            color="primary"
            disabled={disableWorkHistorySubmitButton}
            onClick={handleWorkHistorySubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          {/* if the user has submitted information for one job a card is displayed rendering that information so the user has a visual cue that the submission was successful while still allowing additional work information */}
          {writersWorkHistory &&
            writersWorkHistory.map((writersWork) => {
              return (
                <WriterWorkCard
                  writersWork={writersWork}
                  key={writersWork.id}
                />
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
