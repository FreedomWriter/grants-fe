// import libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

// import components
import GrantCard from "./grantCards/GrantCard.jsx";

// import styling
import { useStyles } from "./GrantsPageStyles.jsx";

// import actions
import { getGrantsInfo } from "../../store/actions/GrantsPageActions.js";

const GrantsPage = () => {
  //======Access necessary actions for GrantsPage======
  const dispatch = useDispatch(); //can use all actions.
  useEffect(() => {
    // console.log("GrantsPage.jsx>dispatch(getGranstInfo) ");
    dispatch(getGrantsInfo());
  }, []);
  //=====================

  //======Access state from reducer for GrantsPage======
  const grants = useSelector((state) => {
    return state.grantsPage.grantsInfo;
  });
  // const status = useSelector((state) => {
  //   return {
  //     isLoadingGrants: state.grantsPage.isLoadingGrants,
  //     error: state.grantsPage.error,
  //     reFetch: state.grantsPage.reFetch,
  //   };
  // });
  //=====================

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container className={classes.appHeader}>
        {/* {!grants || grants.length === 0 ? ( */}
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

export default GrantsPage;
