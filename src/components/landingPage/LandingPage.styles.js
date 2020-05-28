import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../images/opaque-background.jpeg';




export const useStyles = makeStyles((theme) => ({
    topContainer: {
        backgroundImage: 'url('+ backgroundImage + ')',
        backgroundSize: '100% 100%',
      },
      
      topContainerInfo: {
        width: '50%',
        textAlign: 'center',
        display: 'inline-block',
        margin: '5% 0 12% 40%',

        // Mobile styling
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
      },

      title: {
        fontSize: '3.9em',
      },

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
        margin: '0 5% 5% 5%',

        // Mobile styling
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',

            '&::after': {
                content: '""',
                display: 'block',
                margin: '0 auto',
                width: '50%',
                paddingTop: '15%',
                borderBottom: '1px solid black',
        },
        }

    },

    writers: {
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: '0 5% 8% 5%',
        alignItems: 'center',

        // Mobile styling
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
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
        margin: theme.spacing(5),

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