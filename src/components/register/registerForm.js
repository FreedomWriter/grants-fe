import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
            margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100em',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function RegisterForm() {
    const classes = useStyles();
    const [userType, setUserType] = React.useState('');

    const handleChange = (e) => {
        setUserType(e.target.value);
    };

    return (
        <div class='register'>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create Your Account
                    </Typography>
                    <form className={classes.root} autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="user-type">User Type</InputLabel>
                            <Select
                                labelId="user-types-label"
                                id="user-types"
                                value={userType}
                                onChangle={handleChange}
                                label="User Type"
                            >
                                <MenuItem value="">
                                    <em>Select User Type</em>
                                </MenuItem>
                                <MenuItem value="grantWriter">Grant Writer</MenuItem>
                                <MenuItem value="grantApplicant">Grant Applicant</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirm-password"
                                label="Confirm Password"
                                type="password"
                                id="confirm-password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                    Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign In
                            </Link>
                        </Grid>
                    </Grid>
                </form>  
            </div>        
            </Container>           
        </div>

    )
}

