import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./WriterForm.styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

import { deleteWorkHistory } from "../../store/actions/workActions";

export default function WriterEducationCard({ writersWork }) {
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
          {/* /* These buttons currently do nothing */}
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
    </>
  );
}
