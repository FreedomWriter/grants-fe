import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./GrantsList.styles";

export default function GrantsList() {
  const classes = useStyles();

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.login.user)

  // useEffect(() => {
  //   if(user) {
  //     const { id } = user;
  //     dispatch(getProfileInfo(id))
  //   }
  // },[dispatch, user])

  // const grants = useSelector((state) => state.profileInfo.grants)

  return (
    <div className={classes.container}>
      <Grid className={classes.grantslistheader}>
        <h2>Saved Grants</h2>
        <div>
          <Button
            component={Link}
            to="/GrantsForm"
            variant="contained"
            color="primary"
          >
            Add a grant
          </Button>
        </div>
      </Grid>
      <Paper>
        <List>
          <ListItem>
            <h4>Insert grant name here</h4>
          </ListItem>
          <ListItem>
            <h4>Insert grant name here</h4>
          </ListItem>
          <ListItem>
            <h4>Insert grant name here</h4>
          </ListItem>
          {/* {grants.map((grant) => {
            <div key={grant.grant_id}>
              <h3>{grants.grant_name}</h3> 
            </div>
          })} */}
        </List>
      </Paper>
    </div>
  );
}
