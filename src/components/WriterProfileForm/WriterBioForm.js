import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./WriterForm.styles";
export default function WriterBioForm({
  handleChanges,
  formState,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Bio and Background
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.orgName ? true : undefined}
            helperText={formHelperText.orgName}
            onChange={handleChanges}
            className={classes.orgTextField}
            required
            id="orgName"
            name="orgName"
            value={formState.orgName}
            label="Organization Name"
            fullWidth
          />
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
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.website ? true : undefined}
            helperText={formHelperText.website}
            onChange={handleChanges}
            id="website"
            name="website"
            label="Organization Website"
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
