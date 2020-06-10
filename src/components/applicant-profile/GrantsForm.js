import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";
import { postGrants } from "../../store/actions/grantsActions";

import { useStyles } from "./GrantsForm.styles";

export default function GrantsForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const applicant_id = useSelector((state) => state.profileInfo.profileDetails.id);

  const [grant, setGrant] = useState({
    applicant_profile_id: applicant_id,
    grant_name: "",
    awarding_agency: "",
    sector: "",
    due_date: "",
    description: ""
  });

  const handleChange = e => {
    setGrant({
      ...grant,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(postGrants(grant))
      return history.push("/GrantsList");
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Adding a Grant
      </Typography>
      <ValidatorForm
        className={classes.form}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={10} sm={6}>
            <TextField
              required
              id="grant_name"
              name="grant_name"
              label="Grant Name"
              value={grant.grant_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              required
              id="sector"
              name="sector"
              label="Sector"
              value={grant.sector}
              onChange={handleChange}
            />  
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="awarding_agency"
              name="awarding_agency"
              label="Awarding Agency"
              value={grant.awarding_agency}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={10} sm={8}>
            <TextField
              id="due_date"
              label="Due Date"
              type="date"
              name="due_date"
              className={classes.textField}
              value={grant.due_date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <TextAreaAutosize
              required
              id="grant_description"
              name="description"
              placeholder="Describe the grant.."
              aria-label="Grant Description"
              onChange={handleChange}
              value={grant.description}
              rowsMin={6}
              className={classes.textarea}
            />
          </Grid>
          <div className={classes.addbutton}>
            <Button type="submit" variant="contained" color="primary">
              Add a grant
            </Button>
          </div>
        </Grid>
      </ValidatorForm>
    </div>
  );
}
