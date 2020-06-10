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
      workHistoryFormState.start_date.length > 1 &&
      workHistoryFormState.position.length > 1 &&
      workHistoryFormState.responsibilities.length > 1
    ) {
      if (workHistoryFormState.current_position === true) {
        return setDisableWorkHistorySubmitButton(false);
      } else if (workHistoryFormState.end_date.length > 5) {
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
    workHistoryFormState.start_date,
    workHistoryFormState.position,
    workHistoryFormState.responsibilities,
    workHistoryFormState.end_date,
    workHistoryFormState.current_position,
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
            error={formHelperText.company && true}
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
            error={formHelperText.position && true}
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
            InputLabelProps={{ shrink: true }}
            onBlur={handleValidation}
            onChange={handleWorkHistoryChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="start_date"
            name="start_date"
            value={workHistoryFormState.start_date}
            label="Work Start Date"
          />
        </Grid>
        {!workHistoryFormState.current_position && (
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              onBlur={handleValidation}
              error={formHelperText.end_date && true}
              onChange={handleWorkHistoryChanges}
              className={classes.orgTextField}
              type="date"
              required
              id="end_date"
              name="end_date"
              value={workHistoryFormState.end_date}
              label="Work End Date"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="current_position"
                inputProps={{}}
                checked={workHistoryFormState.current_position}
                value={workHistoryFormState.current_position}
              />
            }
            onChange={() =>
              setWorkHistoryFormState({
                ...workHistoryFormState,
                current_position: !workHistoryFormState.current_position,
              })
            }
            label="Current?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaAutosize
            onChange={handleWorkHistoryChanges}
            required
            data-testid="responsibilities"
            id="responsibilities"
            name="responsibilities"
            value={workHistoryFormState.responsibilities}
            placeholder="What were your responsibilities..."
            aria-label="responsibilities"
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
                  handleWorkHistoryChanges={handleWorkHistoryChanges}
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
