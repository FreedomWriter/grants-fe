import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import { deleteGrant } from "../../../store/actions/grantsActions";

import {
  putGrants,
  getGrantsByApplicantId
} from "../../../store/actions/grantsActions";

import { useStyles } from "./GrantsForm.styles";
export default function UpdateGrant() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const applicant_id = useSelector(
    state => state.profileInfo.profileDetails.applicant_id
  );
  const user_id = useSelector(state => state.profileInfo.profileDetails.id);
  const grants = useSelector(state => state.profileInfo.profileDetails.grants);
  const { id } = useParams();

  const [grant, setGrant] = useState({
    applicant_profile_id: user_id,
    grant_name: "",
    awarding_agency: "",
    sector: "",
    due_date: "",
    description: ""
  });

  useEffect(() => {
    setGrant({ ...grants.filter(grant => grant.id == id)[0] });
  }, [grant.id, id, grants]);

  const handleChange = e => {
    e.preventDefault();
    setGrant({
      ...grant,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(putGrants(id, grant));
    dispatch(getGrantsByApplicantId(applicant_id));
    await history.push("/GrantsList");
    console.log(grant, id);
  };

  return (
    <div className={classes.container}>
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
          <div className={classes.grantsbuttons}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(deleteGrant(grant.id));
                dispatch(getGrantsByApplicantId(applicant_id));
                history.push("/GrantsList");
              }}
            >
              Delete
            </Button>
          </div>
        </Grid>
      </ValidatorForm>
    </div>
  );
}
