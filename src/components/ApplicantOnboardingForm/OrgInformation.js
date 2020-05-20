import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./ApplicantForm.styles";
export default function OrgInformation({
  handleChanges,
  formState,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Organization Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.org_name ? true : undefined}
            helperText={formHelperText.org_name}
            onChange={handleChanges}
            className={classes.orgTextField}
            required
            id="org_name"
            name="org_name"
            value={formState.org_name}
            label="Organization Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputLabelProps={{ shrink: true }}
            onBlur={handleValidation}
            error={formHelperText.founding_date && true}
            helperText={
              formHelperText.founding_date && formHelperText.founding_date
            }
            onChange={handleChanges}
            className={classes.orgTextField}
            type="date"
            required
            id="founding_date"
            name="founding_date"
            value={formState.founding_date}
            label="Founding Date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.website ? true : undefined}
            helperText={formHelperText.website}
            onChange={handleChanges}
            id="website"
            name="website"
            label="Organization website"
            value={formState.website}
            className={classes.textArea}
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
