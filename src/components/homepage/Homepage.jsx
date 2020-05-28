import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

// import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserCardWriter from "./userCard/UserCardWriter.jsx";
import UserCardApplicant from "./userCard/UserCardApplicant.jsx";

import { useStyles } from "./HomepageStyles.jsx";

const Homepage = () => {
  //======Access state from reducer for Homepage======
  const grants = useSelector((state) => {
    console.log("Homepage>grants Selector: ", state, state.grants);
    return state.grants.grantsInfo;
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

  // const status = useSelector((state) => {
  //   return {
  //     isLoadingUser: state.homePage.isLoadingUser,
  //     isLoadingGrants: state.homePage.isLoadingGrants,
  //     error: state.homePage.error,
  //     reFetch: state.homePage.reFetch,
  //   };
  // });
  //=====================

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
          <h4>Loading Grants....</h4>
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
