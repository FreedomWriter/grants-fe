import React from "react";

import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserInfo from "./userInfo/UserInfo.jsx";

import { grants, userDetails } from "./dummydata/data.jsx";
import { Container } from "@material-ui/core";

import { useStyles } from "./HomepageStyles.jsx";

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container className="App-header">
        <UserInfo details={userDetails} />
        {grants.map((grant) => {
          // console.log(grant);
          return (
            <div className="Card-display" key={grant.id}>
              {/* <Card1 data={grant} /> */}
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
