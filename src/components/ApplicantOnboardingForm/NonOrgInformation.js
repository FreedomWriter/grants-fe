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
  setFormHelperText,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Additional Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={(e) =>
              handleValidation(e, setFormHelperText, formHelperText, formState)
            }
            error={formHelperText.website && true}
            helperText={formHelperText.website}
            onChange={handleChanges}
            id="website"
            name="website"
            label="Website"
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
            placeholder="Tell us about yourself..."
            aria-label="Your Bio"
            rowsMin={6}
            className={classes.textArea}
          />
        </Grid>
      </Grid>
    </div>
  );
}
