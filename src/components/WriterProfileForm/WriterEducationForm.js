import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getColleges } from "../../store/actions/collegeActions";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";

import { useStyles } from "./WriterForm.styles";
export default function OrgInformation({
  handleChanges,
  formState,
  formHelperText,
  handleValidation,
  setFormState,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      formState.searchCollege !== undefined &&
        formState.searchCollege.length >= 3 &&
        (await dispatch(getColleges(formState.searchCollege)));
    }
    fetchData();
  }, [dispatch, formState.searchCollege]);

  const colleges = useSelector((state) => state.collegeList.colleges);
  console.log(`formState.college: `, formState.college);
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
                placeholder={
                  formState.college
                    ? `${formState.college}`
                    : "Enter A School Name..."
                }
                onBlur={handleValidation}
                error={formHelperText.searchCollege ? true : undefined}
                onChange={handleChanges}
                required
                id="searchCollege"
                name="searchCollege"
                value={
                  formState.college
                    ? formState.college
                    : formState.searchCollege
                }
                label="Enter School Name"
                className={classes.orgTextField}
                inputProps={{ "aria-label": "search" }}
              />
              {!formState.college &&
                colleges &&
                colleges.map((college) => (
                  <option
                    key={college.id}
                    arial-label={college.name}
                    value={college.name}
                    onClick={() =>
                      setFormState({ ...formState, college: college.name })
                    }
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
                : "Organizations Founding Date *"
            }
            onChange={handleChanges}
            className={classes.orgTextField}
            // type="date"
            required
            id="foundingDate"
            name="foundingDate"
            value={formState.foundingDate}
            label="Founding Date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.website ? true : undefined}
            helperText={formHelperText.website}
            onChange={handleChanges}
            id="website"
            name="website"
            label="Organization Website"
            value={formState.website}
            className={classes.orgTextField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaAutosize
            onChange={handleChanges}
            required
            id="bio"
            name="bio"
            value={formState.bio}
            placeholder="Tell us about your organization..."
            aria-label="Organization Bio"
            rowsMin={6}
            className={classes.textArea}
          />
        </Grid>
      </Grid>
    </div>
  );
}
