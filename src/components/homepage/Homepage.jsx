import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserCardWriter from "./userCard/UserCardWriter.jsx";
import UserCardApplicant from "./userCard/UserCardApplicant.jsx";

import { Container } from "@material-ui/core";

import { useStyles } from "./HomepageStyles.jsx";

import {
  getUserInfo,
  getGrantsInfo,
} from "../../store/actions/HomepageActions.js";
import HomePageReducer from "../../store/reducers/HomePageReducer.js";

const Homepage = () => {
  //
  //======Access necessary actions for Homepage======
  const dispatch = useDispatch(); //can use all actions.
  useEffect(() => {
    dispatch(getUserInfo()); //should get loaded from global due to login.
    dispatch(getGrantsInfo());
  }, []);
  //=====================

  //======Access state from reducer for Homepage======
  const grants = useSelector((state) => {
    return state.homePage.grantsInfo;
  });
  const user = useSelector((state) => {
    return state.homePage.userInfo;
  });
  const status = useSelector((state) => {
    return {
      isLoadingUser: state.homePage.isLoadingUser,
      isLoadingGrants: state.homePage.isLoadingGrants,
      error: state.homePage.error,
      reFetch: state.homePage.reFetch,
    };
  });
  //=====================

  console.log("Homepage: user, grants: ", user, grants);
  console.log("Homepage: status: ", status);

  const classes = useStyles();

  console.log("user.type:", user.type === "writer");
  return (
    <div className={classes.container}>
      {/* StylesProvider */}
      {/* GlobalStyles */}
      <Container className={classes.appHeader}>
        {user.type === "writer" ? ( //this is always going following the true...
          <UserCardWriter details={user} />
        ) : (
          <UserCardApplicant details={user} />
        )}
        {grants.map((grant) => {
          // console.log(grant);
          return (
            <div className="Card-display" key={grant.id}>
              <br />
              <GrantCard data={grant} />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Homepage;
