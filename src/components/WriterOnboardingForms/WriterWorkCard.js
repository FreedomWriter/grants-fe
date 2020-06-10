import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./WriterForm.styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  deleteWorkHistory,
  updateWorkHistory,
} from "../../store/actions/workActions";

export default function WriterWorkCard({ writersWork }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const writerId = useSelector((state) => state.login.user.id);

  /* ****************** BEGIN MODAL FOR CONFIRMING DELETE ****************** */

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    await dispatch(deleteWorkHistory(writerId, writersWork.id));
    return setOpen(false);
  };
  const body = (
    <Grid container style={modalStyle} className={classes.modalPaper}>
      <h2 id="delete-job-modal-title">Are you sure?</h2>
      <Grid item container justify="space-evenly">
        <Button
          justify="flex-end"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          justify="flex-end"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );

  /* ****************** END MODAL FOR CONFIRMING DELETE ****************** */

  /* ****************** BEGIN MODAL FOR EDITING STATE & HANDLERS ****************** */

  const [openEditDialog, setOpenEditDialog] = useState(false);

  /******************* DATE FORMATTER START **** This code exists to handle the date as it comes from the back end and format it in a way that will correctly populate the start_date and end_date fields if the user has already selected either option. *******************/
  const dateFormatter = (form_date) => {
    const date = new Date(form_date);
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    const formattedMonth = () => {
      return month.length === 2 ? month + 1 : 0 + `${month + 1}`;
    };
    const formattedDay = () => {
      return day.length === 2 ? day : 0 + `${day}`;
    };

    return `${year}-${formattedMonth()}-${formattedDay()}`;
  };
  const start_date =
    // writersWork.start_date !== null
    // ?
    writersWork.start_date.length === 2
      ? writersWork.start_date
      : dateFormatter(writersWork.start_date);
  // : writersWork.start_date;
  const end_date =
    writersWork.end_date !== null
      ? writersWork.end_date.length === 2
        ? writersWork.end_date
        : dateFormatter(writersWork.end_date)
      : writersWork.end_date;
  /* ****************** DATE FORMATTER END ****************** */

  const [writersWorkFormState, setWritersWorkFormState] = useState({
    ...writersWork,
    /* replacing the start_date and end_date from the back end with formatted dates*/
    start_date,
    end_date,
  });

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleWorkHistoryChanges = (e) => {
    setWritersWorkFormState({
      ...writersWorkFormState,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    dispatch(updateWorkHistory(writerId, writersWorkFormState));

    handleCloseEditDialog();
  };

  /* ****************** END MODAL FOR EDITING STATE & HANDLERS ****************** */
  return (
    <>
      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            data-testid="company-header"
          >
            Company
          </Typography>
          <Typography variant="h5" component="h2">
            {writersWork.company}
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
            data-testid="position-header"
          >
            Position: {writersWork.position}
          </Typography>
          <Typography variant="body2" component="p">
            Start Date: {dateFormatter(writersWork.start_date)}
            <br />
            {writersWork.current_position === "true"
              ? `Current Position`
              : `End Date: ${dateFormatter(writersWork.end_date)}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            responsibilities: {writersWork.responsibilities}
          </Typography>
          <Grid container justify="space-between">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleOpen}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClickOpenEditDialog}
            >
              Edit
            </Button>
          </Grid>
        </CardContent>
      </Card>
      {/*  ****************** BEGIN MODAL FOR CONFIRMING DELETE ****************** */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-job-modal-title"
      >
        {body}
      </Modal>
      {/*  ****************** END MODAL FOR CONFIRMING DELETE ****************** */}
      {/*  ****************** BEGIN DIALOG FOR EDITING ****************** */}
      <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Position</DialogTitle>
        <DialogContent>
          <DialogContentText>Make changes.</DialogContentText>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                onChange={handleWorkHistoryChanges}
                className={classes.orgTextField}
                required
                id="company"
                name="company"
                value={writersWorkFormState.company}
                label="Company"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleWorkHistoryChanges}
                className={classes.orgTextField}
                required
                id="position"
                name="position"
                value={writersWorkFormState.position}
                label="Position"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                onChange={handleWorkHistoryChanges}
                className={classes.orgTextField}
                type="date"
                required
                id="start_date"
                name="start_date"
                value={writersWorkFormState.start_date}
                label="Work Start Date"
              />
            </Grid>
            {!writersWorkFormState.current_position && (
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  onChange={handleWorkHistoryChanges}
                  className={classes.orgTextField}
                  type="date"
                  required
                  id="end_date"
                  name="end_date"
                  value={writersWorkFormState.end_date}
                  label="Work End Date"
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="current_position"
                    inputProps={{}}
                    checked={writersWorkFormState.current_position}
                    value={writersWorkFormState.current_position}
                  />
                }
                onChange={() =>
                  setWritersWorkFormState({
                    ...writersWorkFormState,
                    current_position: !writersWorkFormState.current_position,
                  })
                }
                label="Current?"
              />
            </Grid>
            <Grid item xs={12}>
              <TextAreaAutosize
                onChange={handleWorkHistoryChanges}
                required
                data-testid="responsibilities"
                id="responsibilities"
                name="responsibilities"
                value={writersWorkFormState.responsibilities}
                placeholder="What were your responsibilities..."
                aria-label="responsibilities"
                rowsMin={6}
                className={classes.textArea}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      {/*  ****************** END DIALOG FOR EDITING ****************** */}
    </>
  );
}
