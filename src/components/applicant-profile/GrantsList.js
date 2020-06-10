import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./GrantsList.styles";

export default function GrantsList() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user)

  const grants = useSelector((state) => state.grants.grants)
  console.log(grants)

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
            {grants.map((grant) => {
              return (
                <div key={grant.id}>
                  <h3>{grant.grant_name}</h3> 
                  <p>{grant.description}</p>
                </div>
              )
            })}
      </Paper>
    </div>
  );
}
