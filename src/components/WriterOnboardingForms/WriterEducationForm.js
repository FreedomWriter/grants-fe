import React, { useEffect, useState } from "react";
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

import WriterEducationCard from "./WriterEducationCard";

export default function OrgInformation({
  handleEducationChanges,
  educationFormState,
  formHelperText,
  handleValidation,
  setEducationFormState,
  setDisableButton,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [writersColleges, setWritersColleges] = useState([]);
  const [addEducation, setAddEducation] = useState(false);

  useEffect(() => {
    // disables button on render
    setDisableButton(true);
  }, [setDisableButton]);

  const possibleDegrees = [
    "Associate degree",
    "Bachelor's degree",
    "Master's degree",
    "Doctoral degree",
    "Vocational Certificate",
    "Other",
  ];

  useEffect(() => {
    async function fetchData() {
      // once user has typed 3 characters in, api request for colleges fires
      //consider using local state
      educationFormState.searchCollege !== "" &&
        educationFormState.searchCollege.length >= 3 &&
        (await dispatch(getColleges(educationFormState.searchCollege)));
    }
    fetchData();
  }, [dispatch, educationFormState.searchCollege]);

  const colleges = useSelector((state) => state.collegeList.colleges);

  const handleCollegeSubmit = () => {
    setWritersColleges([
      ...writersColleges,
      {
        id: Date.now(),
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
    setDisableButton(false);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <FormControl className={classes.orgTextField}>
              <InputBase
                placeholder="Enter A School Name..."
                onBlur={handleValidation}
                error={formHelperText.searchCollege ? true : undefined}
                onChange={handleEducationChanges}
                required
                id="searchCollege"
                name="searchCollege"
                // if the user has selected a college, this field will hold that value, if not but they have entered search text, it will hold the search text value. if neither exist, the field will be an empty string
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
            </FormControl>
          </Grid>
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
            error={formHelperText.endDate ? true : undefined}
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
              value={educationFormState.degree}
              onChange={handleEducationChanges}
            >
              {possibleDegrees.map((posDegree) => {
                return (
                  <MenuItem
                    key={posDegree}
                    value={posDegree}
                    onClick={() =>
                      setEducationFormState({
                        ...educationFormState,
                        degree: posDegree,
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
          <Button size="small" color="primary" onClick={handleCollegeSubmit}>
            Submit
          </Button>
        </Grid>

        <Grid item xs={12}>
          {writersColleges &&
            writersColleges.map((writersCollege, i) => {
              return (
                <WriterEducationCard writersCollege={writersCollege} i={i} />
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
