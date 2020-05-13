import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import { useStyles } from "./GrantsForm.styles";
import Button from "@material-ui/core/Button";


export default function GrantsForm() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom >
        Adding a Grant
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="grantName"
            name="grantName"
            label="Grant name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="orgName"
            name="orgName"
            label="Organization Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="contactName"
            name="ContactName"
            label="Contact Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sector"
            name="sector"
            label="Sector"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.datecontainer} noValidate>
            <TextField
              id="dueDate"
              label="Due Date"
              type="date"
              defaultValue="YYYY-MM-DD"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12}>
        <TextAreaAutosize
            required
            id="grantDescription"
            name="grantDescription"
            placeholder="Describe the grant.."
            aria-label="Grant Description"
            rowsMin={6}
            className={classes.textarea}
          />
        </Grid>
        <div className={classes.addbutton}>
          <Button variant="contained" color="primary" href="#">
            Add a grant
          </Button>
        </div>
      </Grid>
    </div>
  );
}
