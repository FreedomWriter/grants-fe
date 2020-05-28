import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGrantsInfo } from "../../store/actions/grantsActions";

import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ApplicantProfile.styles";

const Grants = (/*grants*/) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const applicant_id = useSelector(state => state.user.userId)

  useEffect(() => {
    dispatch(getGrantsInfo());
  }, [dispatch]);

  const grants = useSelector((state) => state.grants.grantsInfo);

  return (
    <>
      <h3>Grants We'd Like to Apply For:</h3>
      <Paper className={classes.profilepaper}>
        {!grants || grants.length < 1 ? (
          <h4>Loading Grants....</h4>
        ) : (
          grants.map((grant) => {
            console.log(grant);
            return (
              <div className={classes.profilegrantcard} key={grant.grant_id}>
                <h4>{grant.title}</h4>
                <p>{grant.detailMain}</p>
              </div>
            );
          })
        )}
      </Paper>
    </>
  );
};

export default Grants;
