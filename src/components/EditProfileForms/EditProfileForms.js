import React from "react";
import { useDispatch } from "react-redux";
import { toggleEditing } from "../../store/actions/profileActions.js";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./EditProfileForms.styles.js";

export const EditButton = (props) => {
  const viewerId = props.viewerId;
  const profileId = props.profileId;
  const dispatch = useDispatch();

  const editToggle = () => {
    dispatch(toggleEditing());
  };

  if (Number(viewerId) === Number(profileId)) {
    return <Button onClick={editToggle}>Edit Profile</Button>;
  } else {
    return null;
  }
};

export const EditProfile = (props) => {
  const classes = useStyles();
  const userType = props.userType;

  if (userType === "writer") {
    return (
      <>
        <div className={classes.editDiv}>
          <div className="name-edit">
            <h3 className={classes.editTitle}>Name:</h3>
            <TextField
              label="First Name"
              className="first-name-input"
              name="first_name"
              type="text"
              autoFocus={true}
              value={props.profile.first_name}
              onChange={props.editHandleChange}
            />
            <TextField
              label="Last Name"
              className="last-name-input"
              name="last_name"
              type="text"
              value={props.profile.last_name}
              onChange={props.editHandleChange}
            />
          </div>
          <div className={classes.location}>
            <h3 className={classes.editTitle}>Location:</h3>
            <TextField
              label="City"
              className="edit-profile-input"
              name="city"
              type="text"
              value={props.profile.city}
              onChange={props.editHandleChange}
            />

            <TextField
              label="State"
              className="edit-profile-input"
              name="state"
              type="text"
              value={props.profile.state}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Zip"
              className="edit-profile-input"
              name="zip"
              type="text"
              value={props.profile.zip}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Country"
              className="edit-profile-input"
              name="country"
              type="text"
              value={props.profile.country}
              onChange={props.editHandleChange}
            />
          </div>

          <div className={classes.moreInfo}>
            <h3 className={classes.editTitle}>More About Me:</h3>

            <TextField
              label="Bio"
              className="edit-profile-input"
              name="bio"
              type="text"
              multiline={true}
              fullWidth={true}
              value={props.profile.bio}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Sector"
              className="edit-profile-input"
              name="sector"
              type="text"
              value={props.profile.sector}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Website"
              className="edit-profile-input"
              name="website"
              type="text"
              value={props.profile.website}
              onChange={props.editHandleChange}
            />
          </div>

          <Button type="submit" onClick={props.handleSubmit}>
            Save
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.editDiv}>
          <div className="name-edit">
            <h3 className={classes.editTitle}>Name:</h3>
            <TextField
              label="First Name"
              className="first-name-input"
              name="first_name"
              type="text"
              autoFocus={true}
              value={props.profile.first_name}
              onChange={props.editHandleChange}
            />
            <TextField
              label="Last Name"
              className="last-name-input"
              name="last_name"
              type="text"
              value={props.profile.last_name}
              onChange={props.editHandleChange}
            />
          </div>
          <TextField
            label="Organization Name"
            className="org-name-input"
            name="org_name"
            type="text"
            value={props.profile.org_name}
            onChange={props.editHandleChange}
          />

          <div className={classes.location}>
            <h3 className={classes.editTitle}>Location:</h3>
            <TextField
              label="City"
              className="edit-profile-input"
              name="city"
              type="text"
              value={props.profile.city}
              onChange={props.editHandleChange}
            />

            <TextField
              label="State"
              className="edit-profile-input"
              name="state"
              type="text"
              value={props.profile.state}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Zip"
              className="edit-profile-input"
              name="zip"
              type="text"
              value={props.profile.zip}
              onChange={props.editHandleChange}
            />

            <TextField
              lable="Country"
              className="edit-profile-input"
              name="country"
              type="text"
              value={props.profile.country}
              onChange={props.editHandleChange}
            />
          </div>

          <div className={classes.moreInfo}>
            <h3 className={classes.editTitle}>More Info:</h3>

            <TextField
              label="Founding Date"
              type="date"
              name="founding_date"
              className="edit-profile-input"
              value={props.profile.founding_date}
              onChange={props.editHandleChange}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Bio"
              className="edit-profile-input"
              name="bio"
              type="text"
              multiline={true}
              fullWidth={true}
              value={props.profile.bio}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Sector"
              className="edit-profile-input"
              name="sector"
              type="text"
              value={props.profile.sector}
              onChange={props.editHandleChange}
            />

            <TextField
              label="Website"
              className="edit-profile-input"
              name="website"
              type="text"
              value={props.profile.website}
              onChange={props.editHandleChange}
            />
          </div>

          <Button type="submit" onClick={props.handleSubmit}>
            Save
          </Button>
        </div>
      </>
    );
  }
};
