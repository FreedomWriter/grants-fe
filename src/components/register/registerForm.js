import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { postRegister, postLogin } from "../../store/actions/LoginActions";
import { useStyles } from './registerForm.styles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState({
    email: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (
      values.email &&
      values.userType &&
      values.password &&
      values.confirmPassword
    ) {
      return setIsDisabled(false);
    }
  }, [values.email, values.userType, values.password, values.confirmPassword]);
  ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    if (value !== values.password) {
      return false;
    }
    return true;
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectChange = (e) => {
    setValues({
      ...values,
      userType: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      postRegister({
        email: values.email,
        password: values.password,
        user_type: values.userType,
      })
    );
    await dispatch(
      postLogin({ email: values.email, password: values.password })
    );
    return history.push("/onboarding");
  };
  return (
    <div className="register">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create Your Account
          </Typography>
          <ValidatorForm
            className={classes.root}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  fullWidth
                  label="Email"
                  name="email"
                  value={values.email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "This field is required",
                    "email is not valid",
                  ]}
                  onChange={handleChange}
                />
              </Grid>
              <FormControl variant="outlined" className={classes.formControl}>
                <TextValidator
                  select
                  variant="outlined"
                  value={values.userType}
                  onChange={handleSelectChange}
                  label="User Type"
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                >
                  <MenuItem value="">
                    <em>Select User Type</em>
                  </MenuItem>
                  <MenuItem value="writer">Grant Writer</MenuItem>
                  <MenuItem value="applicant">Grant Applicant</MenuItem>
                </TextValidator>
              </FormControl>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  validators={["required"]}
                  errorMessages={["This field is required"]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={values.confirmPassword}
                  validators={["isPasswordMatch", "required"]}
                  errorMessages={[
                    "Passwords do not match",
                    "This field is required",
                  ]}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isDisabled}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/LoginForm" variant="body2" className={classes.link}>
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  );
}