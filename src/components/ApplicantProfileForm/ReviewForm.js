import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./ApplicantForm.styles";

export default function ReviewForm({ formState, setFormState, handleChanges }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={formState.firstName}
            onChange={handleChanges}
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={formState.lastName}
            onChange={handleChanges}
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="sector"
            name="sector"
            label="Sector"
            value={formState.sector}
            onChange={handleChanges}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={formState.city}
            onChange={handleChanges}
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            value={formState.state}
            onChange={handleChanges}
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={formState.zip}
            onChange={handleChanges}
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={formState.country}
            onChange={handleChanges}
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.orgTextField}
            required
            value={formState.orgName}
            id="orgName"
            name="orgName"
            label="Organization Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.orgTextField}
            required
            value={formState.foundingDate}
            id="foundingDate"
            name="foundingDate"
            label="Founding Date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="website"
            name="website"
            label="Organization Website"
            className={classes.textArea}
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaAutosize
            required
            id="bio"
            name="bio"
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
