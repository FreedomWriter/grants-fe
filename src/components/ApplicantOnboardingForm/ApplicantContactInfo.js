import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useStyles } from "./ApplicantForm.styles";
export default function ApplicantContactInfo({
  formState,
  handleChanges,
  setFormState,
  formHelperText,
  handleValidation,
  orgStatus,
  handleOrgStatusChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography component="h2" variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.first_name && true}
            helperText={formHelperText.first_name}
            required
            id="first_name"
            name="first_name"
            label="First name"
            value={formState.first_name}
            onChange={handleChanges}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.last_name && true}
            helperText={formHelperText.last_name}
            required
            id="last_name"
            name="last_name"
            label="Last name"
            value={formState.last_name}
            onChange={handleChanges}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.sector && true}
            helperText={formHelperText.sector}
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
            onBlur={handleValidation}
            error={formHelperText.city && true}
            helperText={formHelperText.city}
            required
            id="city"
            name="city"
            label="City"
            value={formState.city}
            onChange={handleChanges}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.state && true}
            helperText={formHelperText.state}
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
            onBlur={handleValidation}
            error={formHelperText.zip && true}
            helperText={formHelperText.zip}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={formState.zip}
            onChange={handleChanges}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.country && true}
            helperText={formHelperText.country}
            required
            id="country"
            name="country"
            value={formState.country}
            onChange={handleChanges}
            label="Country"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="org"
                checked={orgStatus}
                value={orgStatus}
              />
            }
            onClick={handleOrgStatusChange}
            label="Are you part of an organization?"
          />
        </Grid>
      </Grid>
    </div>
  );
}
