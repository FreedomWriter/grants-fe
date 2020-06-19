import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { useStyles } from "./WriterForm.styles";

import { v4 as uuidv4 } from "uuid";

import WriterEducationCard from "./WriterEducationCard";

export default function WriterEducationForm({
  handleEducationChanges,
  educationFormState,
  formHelperText,
  handleValidation,
  setEducationFormState,
  writersColleges,
  handleCollegeSubmit,
  setDisableCollegeSubmitButton,
  disableCollegeSubmitButton,
  enableButton,
}) {
  const classes = useStyles();

  /* used to render a drop down list of possible degrees */
  const possibleDegrees = [
    { id: uuidv4(), deg: "Associate degree" },
    { id: uuidv4(), deg: "Bachelor's degree" },
    { id: uuidv4(), deg: "Master's degree" },
    { id: uuidv4(), deg: "Doctoral degree" },
    { id: uuidv4(), deg: "Vocational Certificate" },
    { id: uuidv4(), deg: "Other" },
  ];
  useEffect(() => {
    enableButton();

    /* handles whether the button to submit a college is disabled based on required fields */
    if (
      educationFormState.college.length > 1 &&
      educationFormState.startDate.length > 1 &&
      educationFormState.degree.length > 1
    ) {
      if (educationFormState.endDate.length > 5) {
        return setDisableCollegeSubmitButton(false);
      } else if (educationFormState.anticipatedGraduation.length > 5) {
        return setDisableCollegeSubmitButton(false);
      } else {
        return setDisableCollegeSubmitButton(true);
      }
    } else {
      setDisableCollegeSubmitButton(true);
    }
  }, [
    educationFormState.searchCollege,
    educationFormState.college,
    educationFormState.startDate,
    educationFormState.degree,
    educationFormState.anticipatedGraduation,
    educationFormState.endDate,
    setDisableCollegeSubmitButton,
    enableButton,
  ]);

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom color="primary">
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TextField
                data-testid="schoolname"
                onBlur={handleValidation}
                error={formHelperText.searchCollege && true}
                onChange={handleEducationChanges}
                className={classes.orgTextField}
                required
                id="college"
                name="college"
                value={educationFormState.college}
                label="Enter School Name"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{ shrink: true }}
            onBlur={handleValidation}
            error={formHelperText.startDate && true}
            helperText={formHelperText.startDate && formHelperText.startDate}
            onChange={handleEducationChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="startDate"
            name="startDate"
            value={educationFormState.startDate}
            label="Start Date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{ shrink: true }}
            onBlur={handleValidation}
            error={formHelperText.endDate && true}
            helperText={formHelperText.endDate && formHelperText.endDate}
            onChange={handleEducationChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="endDate"
            name="endDate"
            value={educationFormState.endDate}
            label={
              educationFormState.stillAttending
                ? "Anticipated Graduation Date*"
                : "End Date*"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="stillAttending"
                checked={educationFormState.stillAttending}
                value={educationFormState.stillAttending}
              />
            }
            onClick={() =>
              setEducationFormState({
                ...educationFormState,
                stillAttending: !educationFormState.stillAttending,
              })
            }
            label="Currently Enrolled"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.orgTextField}>
            <InputLabel id="degree-earned-label">Degree Awarded</InputLabel>
            <Select
              labelId="degree-earned-label"
              id="degree"
              name="degree"
              value={
                educationFormState.degree
                  ? educationFormState.degree
                  : possibleDegrees[possibleDegrees.length - 1].deg
              }
              onChange={handleEducationChanges}
            >
              {possibleDegrees.map((posDegree) => {
                return (
                  <MenuItem
                    key={posDegree.id}
                    value={posDegree.deg}
                    onClick={() =>
                      setEducationFormState({
                        ...educationFormState,
                        degree: posDegree.deg,
                      })
                    }
                  >
                    {posDegree.deg}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Button
            size="small"
            color="primary"
            disabled={disableCollegeSubmitButton}
            onClick={handleCollegeSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          {/* if the user has submitted information for one school/degree a card is displayed rendering that information so the user has a visual cue that the submission was successful while still allowing additional college information */}
          {writersColleges &&
            writersColleges.map((writersCollege) => {
              return (
                <WriterEducationCard
                  writersCollege={writersCollege}
                  key={writersCollege.id}
                />
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
