import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./loginForm.styles";
import { Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { postLogin } from "../../store/actions/LoginActions";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(user)).then(() => history.push("/Homepage"));
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <ValidatorForm
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            autoFocus
            value={user.email}
            validators={["required", "isEmail"]}
            errorMessages={["This field is required", "Invalid Email"]}
            onChange={handleChange}
          />
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={user.password}
            validators={["required"]}
            errorMessages={["This field is required"]}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember Me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2" className={classes.links}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/RegisterForm"
                variant="body2"
                className={classes.links}
              >
                Don't have an account? Register here
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    </Container>
  );
};
export default Login;
