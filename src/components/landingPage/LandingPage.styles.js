import React from 'react';
import { makeStyles } from '@material-ui/core/styles';




export const useStyles = makeStyles((theme) => ({
    buttons: {
        margin: theme.spacing(3, 3, 2),
        color: '#000000',
        "&:hover": {
            color: "#FFFFFF"
        },
    },

    icons: {
        fontSize: '9.3em',
        color: '#3A539B'
    },

    info: {
        marginTop: '3%',
        justifyItems: 'space-between',
    },

    applicants: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 5% 5% 5%'
    },

    writers: {
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: '0 5% 8% 5%',
        alignItems: 'center',
    },

    p: {
        fontSize: '1.4em',
        margin: '0 2% 0 5%',
    },

    userStories: {
        backgroundColor: 'rgba(58, 83, 155, 0.9)',
        display: 'inline-block'
    },

    paper: {
        height: 350,
        width: 250,  
        // margin not taking for some reason
        margin: '10% 70% 25% 69%',
        paddingTop: '10%',
        textAlign: 'center',
    },

    userStoriesTitle: {
        textAlign: 'center',
        fontSize: '2em',
    },

    users: {
        borderRadius: '50%',
        height: 90,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    
    userReview: {
        margin: '5% 10% 0 10%',
    },
}))