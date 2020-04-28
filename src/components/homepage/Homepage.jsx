import React from "react";

import Card1 from "./grantCards/Card1.jsx";
import GrantCard from "./grantCards/GrantCard.jsx";
import UserInfo from "./userInfo/UserInfo.jsx";

import { grants, userDetails } from "./dummydata/data.jsx";
import { Container } from "@material-ui/core";

const Homepage = () => {
  return (
    <div className="App">
      <Container className="App-header">
        <UserInfo details={userDetails} />
        {grants.map((grant) => {
          // console.log(grant);
          return (
            <div className="Card-display" key={grant.id}>
              <Card1 data={grant} />
              <GrantCard data={grant} />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Homepage;
