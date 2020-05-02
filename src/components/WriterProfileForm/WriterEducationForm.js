import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getColleges,
  clearCollegeList,
} from "../../store/actions/collegeActions";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";

import Button from "@material-ui/core/Button";
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

  const [writersColleges, setWritersColleges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // once user has typed 3 characters in, api request for colleges fires
      //consider using local state
      formState.searchCollege !== undefined &&
        formState.searchCollege.length >= 3 &&
        (await dispatch(getColleges(formState.searchCollege)));
    }
    fetchData();
  }, [dispatch, formState.searchCollege]);

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
                onChange={handleChanges}
                required
                id="searchCollege"
                name="searchCollege"
                value={formState.searchCollege || ""}
                label="Enter School Name"
                className={classes.orgTextField}
                inputProps={{ "aria-label": "search" }}
              />

              {/* renders a list of options for the user to select from using data pulled from api */}
              {formState.searchCollege &&
                colleges &&
                colleges.map((college) => (
                  <option
                    key={college.id}
                    arial-label={college.name}
                    value={college.name}
                    onClick={() => {
                      setWritersColleges([
                        ...writersColleges,
                        { id: college.id, college: college.name },
                      ]);
                      setFormState({
                        ...formState,
                        college: undefined,
                        searchCollege: undefined,
                      });
                      return dispatch(clearCollegeList());
                    }}
                  >
                    {college.name}
                  </option>
                ))}
            </FormControl>
            {writersColleges &&
              writersColleges.map((writersCollege, i) => {
                return (
                  <Grid item container key={writersCollege.id + (i + 1)}>
                    <Grid item>
                      <h2>Edit/Add Component</h2>
                      <p>{`${i + 1} ${writersCollege.college}`}</p>
                      <Button
                        onClick={() =>
                          console.log(
                            `You want to edit ${
                              writersCollege.college
                            } which has the id of ${
                              writersCollege.id
                            } and a key of ${writersCollege.id + (i + 1)}`
                          )
                        }
                        className={classes.editButton}
                      >
                        Edit
                      </Button>
                    </Grid>

                    {/* <Grid item>
                      <Button
                        onClick={() =>
                          console.log(
                            `You want to edit ${writersCollege.college}which has the id of ${writersCollege.id}`
                          )
                        }
                        className={classes.editButton}
                      >
                        Edit
                      </Button>
                    </Grid> */}
                  </Grid>
                );
              })}
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
