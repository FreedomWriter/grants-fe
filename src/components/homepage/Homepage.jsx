import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

// import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserCardWriter from "./userCard/UserCardWriter.jsx";
import UserCardApplicant from "./userCard/UserCardApplicant.jsx";

import { useStyles } from "./HomepageStyles.jsx";

import {
  getUserInfo,
  getGrantsInfo,
} from "../../store/actions/HomepageActions.js";

const Homepage = () => {
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
  const state = useSelector((state) => {
    return state;
  });
  const user = useSelector((state) => {
    return state.homePage.userInfo;
  });
  const testUser = useSelector((state) => {
    // console.log("Homepage>testUser:state: ", state);
    if (state.login) {
      const userType = state.login.usertype.toLowerCase();
      switch (userType) {
        case "writer":
          // console.log("userType = writer");
          return state.writerprofile;
        case "applicant":
          // console.log("userType = applicant");
          return state.profileInfo;
        default:
          console.log("userType error");
          break;
      }
    }
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


  console.log("Homepage: testUser: ", testUser);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* StylesProvider */}
      {/* GlobalStyles */}
      <Container className={classes.appHeader}>
        {user.type === "writer" ? (
          <UserCardWriter details={user} />
        ) : (
          <UserCardApplicant details={user} />
        )}

        {!grants || grants.length < 1 ? (
          <h4>Loading....</h4>
        ) : (
          grants.map((grant) => {
            return (
              <div className="Card-display" key={grant.id}>
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
