import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import { useStyles } from '../ApplicantProfile.styles'

import GrantCard from './GrantCard'


const Grants = () => {
  const classes = useStyles();

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.login.user)

  // useEffect(() => {
  //   if(user) {
  //     const { id } = user;
  //     dispatch(getProfileInfo(id))
  //   }
  // },[dispatch, user])

  // const grants = useSelector((state) => state.profileInfo.grants)
  
  return(
    <>
      <h2>Grants We'd Like to Apply For: </h2>
      <Paper className={classes.profilepaper}>
        <h4>Insert grant name here </h4>
        {/* {grants.map((grant) => {
          <div key={grant.grant_id}>
            <GrantCard grant={grant} />
          </div>
        })} */}
      </Paper>
    </>
  )
}

export default Grants 