import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { useStyles } from "./WriterForm.styles";

export default function ApplicantContactInfo({
  contactFormState,
  handleContactChanges,
  formHelperText,
  handleValidation,
  enableButton,
}) {
  const classes = useStyles();

  useEffect(() => {
    /* once the user has filled out all required form, `Next` button will be enabled (button is rendered in WriterProfileForm.js. need to explore a more performant solution */
    contactFormState.firstName &&
      contactFormState.lastName &&
      contactFormState.city &&
      contactFormState.state &&
      contactFormState.zip &&
      contactFormState.country &&
      enableButton(false);
  }, [
    contactFormState.firstName,
    contactFormState.lastName,
    contactFormState.city,
    contactFormState.state,
    contactFormState.zip,
    contactFormState.country,
    enableButton,
  ]);

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom color="primary">
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.firstName && true}
            helperText={formHelperText.firstName}
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={contactFormState.firstName}
            onChange={handleContactChanges}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.lastName && true}
            helperText={formHelperText.lastName}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={contactFormState.lastName}
            onChange={handleContactChanges}
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
            value={contactFormState.city}
            onChange={handleContactChanges}
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.state && true}
            helperText={formHelperText.state}
            required
            id="state"
            name="state"
            value={contactFormState.state}
            onChange={handleContactChanges}
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
            value={contactFormState.zip}
            onChange={handleContactChanges}
            fullWidth
            autoComplete="billing postal-code"
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
            value={contactFormState.country}
            onChange={handleContactChanges}
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      </Grid>
    </div>
  );
}
