import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useStyles } from './registerForm.styles.js';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function RegisterForm(props) {

    const classes = useStyles();

    const [ values, setValues ] = useState({
            email: '',
            userType: '',
            password: '',
            confirmPassword: '',           

    })

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if(value !== values.password){
            return false;
        }
        return true
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });            
        }

    const handleSelectChange = (e) => {
        setValues({
            ...values,
            userType: e.target.value 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('api url', values)
            .then(res => {
                props.history.push('/')
            })
            .catch(err => {
                console.log(err);
            })
        console.log(values)
    }

    return (
        <div className='register'>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create Your Account
                    </Typography>
                    <ValidatorForm className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Email"
                                name="email"
                                value={values.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['This field is required', 'email is not valid']}
                                onChange={handleChange}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                className={classes.selectEmpty}
                                value={values.userType}
                                onChange={handleSelectChange}
                                label="User Type"
                                select
                                validators={['required']}
                                errorMessages={['This field is required']}
                            >
                                <MenuItem value="">
                                    <em>Select User Type</em>
                                </MenuItem>
                                <MenuItem value="writer">Grant Writer</MenuItem>
                                <MenuItem value="applicant">Grant Applicant</MenuItem>
                            </TextValidator>
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={values.password}
                                validators={['required']}
                                errorMessages={['This field is required']}
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
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['Passwords do not match', 'This field is required']}
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
                </ValidatorForm>
            </div>        
            </Container>           
        </div>

    )
}

