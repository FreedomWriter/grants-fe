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
    userName: {
        textAlign: "center",
    },
    userServices: {
        width: "auto",
    },
    root: {
        minWidth: "0",
        marginLeft: "12.5%",
        marginTop: "5%",
    },
    label: {
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
}));