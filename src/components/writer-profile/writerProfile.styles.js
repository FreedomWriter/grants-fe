import {
    makeStyles
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    userPicture: {
        width: "100%",
    },
    userEducation: {
        marginTop: "5%",
    },
    rootUserName: {
        textAlign: "center",
        [theme.breakpoints.up('lg')]: {
            width: "87%",
        },
    },
    userServices: {
        width: "90%",
    },
    writerWebsite: {
        textAlign: "center",
    },
    rootButton: {
        minWidth: "0",
        marginLeft: "12.5%",
        marginTop: "5%",
        [theme.breakpoints.up('lg')]: {
            marginTop: "2.5%",
            marginLeft: "34%",
        },
    },
    rootPaper: {
        width: "80%",
        height: "auto",
        marginTop: "30%",
        marginBottom: "20%",
        marginLeft: "10%",
        display: "grid",
        gridTemplateColumns: "1.3fr 2.8fr",
        gridTemplateRows: "0.6fr 0.8fr",
        gap: "5px 5px",
        [theme.breakpoints.up('lg')]: {
            marginTop: "10%",
        },
    },
    labelButton: {
        minWidth: "0",
        width: "50px",
        padding: "0",
        fontSize: "0.5rem",
        textAlign: "center",
        whiteSpace: "nowrap",
    },
    finalGrid: {
        marginTop: "20%",
        marginLeft: "5%",
        gridColumnStart: "1",
        gridColumnEnd: "3",
        gridRowStart: "4",
        gridRowEnd: "4",
    },
    rootIcon: {
        margin: "20%",
        width: "2em",
        height: "2em",
        marginLeft: "16.5%",
        [theme.breakpoints.up('lg')]: {
            marginLeft: "30%",
            width: "3em",
            height: "3em",
            marginTop: "12%",
            marginBottom: "2.5%",
        },
    },
    rootLink: {
        minWidth: "0",
        marginLeft: "10%",
        width: "125px",
        padding: "10%",
        fontSize: "0.8rem",
        textAlign: "center",
        whiteSpace: "nowrap",
        [theme.breakpoints.up('lg')]: {
            padding: "33.5%",
        },
    }
}));