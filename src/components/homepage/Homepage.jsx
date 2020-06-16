import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

// import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserCardWriter from "./userCard/UserCardWriter.jsx";
import UserCardApplicant from "./userCard/UserCardApplicant.jsx";
import Loader from "../loader/Loader.js";

import { useStyles } from "./HomepageStyles.jsx";

const Homepage = () => {
  //======Access state from reducer for Homepage======
  const grants = useSelector((state) => {
    return state.grants.grants;
  });

  const userType = useSelector((state) => {
    return state.login.usertype.toLowerCase();
  });

  const user = useSelector((state) => {
    if (state.login) {
      switch (userType) {
        case "writer":
          return state.profileInfo.profileDetails;
        case "applicant":
          return state.profileInfo.profileDetails;
        default:
          console.log("userType error");
          break;
      }
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container className={classes.appHeader}>
        {userType === "writer" ? (
          <UserCardWriter details={user} />
        ) : (
          <UserCardApplicant details={user} />
        )}

        {!grants || grants.length < 1 ? (
          <Loader />
        ) : (
          grants.map((grant) => {
            return (
              <div key={grant.id}>
                <br />
                <GrantCard data={grant} />
              </div>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default Homepage;
