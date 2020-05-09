import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getColleges } from "../../store/actions/collegeActions";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
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
  setWritersColleges,
  handleCollegeSubmit,
  setDisableCollegeSubmitButton,
  disableCollegeSubmitButton,
  enableButton,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  /* colleges pulled from state  (returned from api) */
  const colleges = useSelector((state) => state.collegeList.colleges);

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
    async function fetchData() {
      try {
        /* once user has typed 3 characters in, api request for colleges fires, rendering a list of known colleges which match the text the user has typed */
        /* conditional ensures the user has typed at least 3 characters before sending - should be REFACTOR to pull an initial subset of the data and switch to filtering to avoid multiple api calls*/

        educationFormState.searchCollege !== "" &&
          educationFormState.searchCollege.length >= 3 &&
          (await dispatch(getColleges(educationFormState.searchCollege)));
      } catch (err) {
        console.log(err);
      }
    }

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
    fetchData();
  }, [
    dispatch,
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
            <FormControl className={classes.orgTextField}>
              <InputBase
                data-testid="schoolname"
                placeholder="Enter A School Name..."
                onBlur={handleValidation}
                error={formHelperText.searchCollege && true}
                onChange={handleEducationChanges}
                required
                id="searchCollege"
                name="searchCollege"
                /* if the user has selected a college, this field will hold that value, if not but they have entered search text, it will hold the search text value. if neither exist, the field will be an empty string */
                value={
                  educationFormState.college
                    ? educationFormState.college
                    : educationFormState.searchCollege
                    ? educationFormState.searchCollege
                    : ""
                }
                label="Enter School Name"
                inputProps={{ "aria-label": "search" }}
              />
              {/* handles the edge case where a users school is not listed in the api rendering the list of schools */}
              {educationFormState.searchCollege &&
                colleges &&
                colleges.length === 0 &&
                setEducationFormState({
                  ...educationFormState,
                  college: educationFormState.searchCollege,
                  searchCollege: "",
                })}
              {/* renders a list of options of colleges for the user to select from using data pulled from api */}
              <Grid item data-testid="colleges-options">
                {" "}
                {educationFormState.searchCollege &&
                  colleges &&
                  colleges.map((college) => (
                    <option
                      key={college.id}
                      arial-label={college.name}
                      value={college.name}
                      onClick={() => {
                        setEducationFormState({
                          ...educationFormState,
                          college: college.name,
                          searchCollege: "",
                        });
                      }}
                    >
                      {college.name}
                    </option>
                  ))}
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.startDate && true}
            helperText={
              formHelperText.startDate
                ? formHelperText.startDate
                : "Start Date*"
            }
            onChange={handleEducationChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="startDate"
            name="startDate"
            value={educationFormState.startDate}
            aria-label="Start Date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.endDate && true}
            helperText={
              formHelperText.endDate
                ? formHelperText.endDate
                : educationFormState.stillAttending
                ? "Anticipated Graduation Date*"
                : "End Date*"
            }
            onChange={handleEducationChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="endDate"
            name="endDate"
            value={educationFormState.endDate}
            aria-label="End Date"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="stillAttending"
                checked={educationFormState.stillAttending}
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
                  : possibleDegrees[possibleDegrees.length - 1]
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
                    {posDegree}
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
