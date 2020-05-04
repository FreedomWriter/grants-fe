import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getColleges,
  clearCollegeList,
} from "../../store/actions/collegeActions";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

import { useStyles } from "./WriterForm.styles";

import WriterEducationCard from "./WriterEducationCard";

export default function OrgInformation({
  handleEducationChanges,
  educationFormState,
  formHelperText,
  handleValidation,
  setEducationFormState,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [writersColleges, setWritersColleges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // once user has typed 3 characters in, api request for colleges fires
      //consider using local state
      // educationFormState.searchCollege !== "" &&
      educationFormState.searchCollege.length >= 3 &&
        (await dispatch(getColleges(educationFormState.searchCollege)));
    }
    fetchData();
  }, [dispatch, educationFormState.searchCollege]);

  const colleges = useSelector((state) => state.collegeList.colleges);

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
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
                className={classes.orgTextField}
                inputProps={{ "aria-label": "search" }}
              />

              {/* renders a list of options for the user to select from using data pulled from api */}
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
            error={formHelperText.foundingDate ? true : undefined}
            helperText={
              formHelperText.foundingDate
                ? formHelperText.foundingDate
                : "Start Date MM/YY*"
            }
            onChange={handleEducationChanges}
            className={classes.orgTextField}
            // type="date"
            required
            id="startDate"
            name="startDate"
            value={educationFormState.foundingDate}
            label="Start Date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.foundingDate ? true : undefined}
            helperText={
              formHelperText.foundingDate
                ? formHelperText.foundingDate
                : "End Date  MM/YY*"
            }
            onChange={handleEducationChanges}
            className={classes.orgTextField}
            // type="date"
            required
            id="endDate"
            name="endDate"
            value={educationFormState.foundingDate}
            label="End Date"
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Button size="small" color="primary">
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
