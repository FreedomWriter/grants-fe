import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { useStyles } from "./WriterForm.styles";

import { v4 as uuidv4 } from "uuid";

export default function WriterBioForm({
  handleBioChanges,
  setBioFormState,
  bioFormState,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();

  const possibleSkills = [
    { id: uuidv4(), skill: "Writer Only" },
    { id: uuidv4(), skill: "Researcher Only" },
    { id: uuidv4(), skill: "Writer and Researcher" },
  ];

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
          <FormControl className={classes.orgTextField}>
            <InputLabel id="degree-earned-label">Degree Awarded</InputLabel>
            <Select
              labelId="degree-earned-label"
              id="degree"
              name="degree"
              value={
                bioFormState.servicesOffered
                  ? bioFormState.servicesOffered
                  : possibleSkills[possibleSkills.length - 1]
              }
              onChange={handleBioChanges}
            >
              {possibleSkills.map((posSkill) => {
                return (
                  <MenuItem
                    key={posSkill.id}
                    value={posSkill.skill}
                    onClick={() =>
                      setBioFormState({
                        ...bioFormState,
                        servicesOffered: posSkill.skill,
                      })
                    }
                  >
                    {posSkill.skill}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
