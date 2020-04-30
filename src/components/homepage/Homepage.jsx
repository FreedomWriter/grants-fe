import React, { useEffect } from "react";

// import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserInfo from "./userInfo/UserInfo.jsx";

import { grants, userDetails } from "./dummydata/data.jsx";
import { Container } from "@material-ui/core";

import { useStyles } from "./HomepageStyles.jsx";

import { connect } from "react-redux";
import {
  getUserInfo,
  getGrantsInfo,
} from "../../store/actions/HomepageActions.js";

const Homepage = ({
  //mapStateToProps:
  error,
  isLoadingUser,
  isLoadingGrants,
  userInfo,
  grantsInfo,
  state,
  //import from actions:
  getUserInfo,
  getGrantsInfo,
}) => {
  useEffect(() => {
    // getUserInfo();
    // getGrantsInfo();
  }, []);

  const classes = useStyles();
  console.log("Redux test: ", isLoadingUser);
  return (
    <div className={classes.container}>
      {/* StylesProvider */}
      {/* GlobalStyles */}
      <Container className="App-header">
        {!isLoadingUser ? (
          <UserInfo details={userDetails} />
        ) : (
          <h3>Loading information....</h3>
        )}
        {grants.map((grant) => {
          // console.log(grant);
          return (
            <div className="Card-display" key={grant.id}>
              {/* <Card1 data={grant} /> */}
              <br />
              <GrantCard data={grant} />
              {/* <GrantCard2 data={grant} /> */}
            </div>
          );
        })}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
  isLoadingUser: state.isLoadingUser,
  isLoadingGrants: state.isLoadingGrants,
  userInfo: state.userInfo,
  grantsInfo: state.grantsInfo,
  // state: state,
});

export default connect(mapStateToProps, { getUserInfo, getGrantsInfo })(
  Homepage
);
