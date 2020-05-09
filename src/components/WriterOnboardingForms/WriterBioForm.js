import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";

import { useStyles } from "./WriterForm.styles";
export default function WriterBioForm({
  handleBioChanges,
  bioFormState,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom color="primary">
        Personalize Your Profile And Stand Out
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleValidation}
            error={formHelperText.website ? true : undefined}
            helperText={formHelperText.website}
            onChange={handleBioChanges}
            id="website"
            name="website"
            label="Your Website"
            value={bioFormState.website}
            className={classes.textArea}
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaAutosize
            onChange={handleBioChanges}
            required
            id="bio"
            name="bio"
            value={bioFormState.bio}
            placeholder="This is your chance to shine..."
            aria-label="Grant Writers Bio"
            rowsMin={6}
            className={classes.textArea}
          />
        </Grid>
      </Grid>
    </div>
  );
}
