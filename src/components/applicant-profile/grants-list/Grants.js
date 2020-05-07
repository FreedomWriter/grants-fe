import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'
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
    <Typography variant='h6'>
      Grants We'd Like to Apply For:
    </Typography>
      <Paper className={classes.profilepaper}>
        <Typography variant='subtitle2'>
          Insert grant name here
        </Typography>
        <Typography variant='subtitle2'>
          Insert grant name here
        </Typography>
        <Typography variant='subtitle2'>
          Insert grant name here
        </Typography>
        <Typography variant='subtitle2'>
          Insert grant name here
        </Typography>
        <Typography variant='subtitle2'>
          Insert grant name here
        </Typography>
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