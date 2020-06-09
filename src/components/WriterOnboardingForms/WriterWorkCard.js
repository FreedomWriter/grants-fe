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
import { deleteWorkHistory } from "../../store/actions/workActions";

export default function WriterEducationCard({
  writersWork,
  handleWorkHistoryChanges,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const writerId = useSelector((state) => state.login.user.id);

  const dateFormatter = (form_date) => {
    const date = new Date(form_date);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formattedMonth = () => {
      return month.length === 2 ? month : 0 + `${month}`;
    };

    return `${year}-${formattedMonth()}-${day}`;
  };
  const start_date = dateFormatter(writersWork.start_date);
  const end_date = dateFormatter(writersWork.end_date);

  const [writersWorkFormState, setWritersWorkFormState] = useState({
    ...writersWork,
    start_date,
    end_date,
  });

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
    <div style={modalStyle} className={classes.modalPaper}>
      <h2 id="delete-job-modal-title">Are you sure?</h2>
      <p id="delete-job-modal-description">This is permanent.</p>
      <Button
        justify="flex-end"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );

  /* ****************** END MODAL FOR CONFIRMING DELETE ****************** */

  /* ****************** BEGIN MODAL FOR EDITING ****************** */

  const [openEditDialog, setOpenEditDialog] = React.useState(false);

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  /* ****************** END MODAL FOR EDITING ****************** */
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
            Start Date: {writersWork.start_date}
            <br />
            {writersWork.current_position === "true"
              ? `Current Position`
              : `End Date: ${writersWork.end_date}`}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-job-modal-title"
        aria-describedby="delete-job-modal-description"
      >
        {body}
      </Modal>
      <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Position</DialogTitle>
        <DialogContent>
          <DialogContentText>Make changes.</DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                // onBlur={handleValidation}
                // error={formHelperText.company && true}
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
                // onBlur={handleValidation}
                // error={formHelperText.position && true}
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
                // onBlur={handleValidation}
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
                  // onBlur={handleValidation}
                  // error={formHelperText.end_date && true}
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
                    checked={
                      writersWorkFormState.current_position === "true"
                        ? true
                        : false
                    }
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
          <Button
            onClick={() => console.log({ writersWorkFormState })}
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
