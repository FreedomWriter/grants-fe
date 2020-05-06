import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./WriterForm.styles";
export default function ApplicantContactInfo({
  handleWorkHistoryChanges,
  setWorkHistoryFormState,
  workHistoryFormState,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();

  const [writersWorkHistory, setWritersWorkHistory] = useState([]);

  const handleWorkHistorySubmit = () => {
    setWritersWorkHistory([
      ...writersWorkHistory,
      {
        college: workHistoryFormState.company,
        startDate: workHistoryFormState.startDate,
        endDate: workHistoryFormState.endDate,
        position: workHistoryFormState.position,
        currentPosition: workHistoryFormState.currentPosition,
        responsibilites: workHistoryFormState.responsibilites,
      },
    ]);
    setWorkHistoryFormState({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      currentPosition: false,
      responsibilites: "",
    });
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Work History
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.endDate ? true : undefined}
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
            error={formHelperText.startDate ? true : undefined}
            helperText={
              formHelperText.startDate
                ? formHelperText.startDate
                : "Start Date*"
            }
            onChange={handleWorkHistoryChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="startDate"
            name="startDate"
            value={workHistoryFormState.startDate}
            aria-label="Start Date"
          />
        </Grid>
        {!workHistoryFormState.currentPosition && (
          <Grid item xs={12}>
            <TextField
              onBlur={handleValidation}
              error={formHelperText.endDate ? true : undefined}
              onChange={handleWorkHistoryChanges}
              className={classes.orgTextField}
              type="date"
              required
              id="endDate"
              name="endDate"
              value={workHistoryFormState.endDate}
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
            id="responsibilities"
            name="responsibilities"
            value={workHistoryFormState.responsibilities}
            placeholder="What were your responsibilites..."
            aria-label="Position responsibilities"
            rowsMin={6}
            className={classes.textArea}
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Button
            size="small"
            color="primary"
            onClick={handleWorkHistorySubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
