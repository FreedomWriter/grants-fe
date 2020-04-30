import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../ApplicantProfile.styles'

import GrantCard from './GrantCard'


const Grants = () => {
  const classes = useStyles();

  const grants = [
    {
      grantId: 1,
      grantName: 'grant name #1',
      grantDescription: 'grant description #1'
    },
    {
      grantId: 2,
      grantName: 'grant name #2',
      grantDescription: 'grant description #2'
    },
    {
      grantId: 3,
      grantName: 'grant name #3',
      grantDescription: 'grant description #3'
    }
  ]

  // useEffect(() => {
  //   if(!grants) {
  //     props.getGrants(props.token)
  //   }
  //   setGrants(props.grants)
  // },[])

  // useEffect(() => {
  //   setGrants(props.grants)
  // }, [props.grants])
  
  return(
    <>
      <h2>Grants We'd Like to Apply For: </h2>
      <Paper className={classes.profilepaper}>
        {grants.map((grant) => (
          <div key={grant.grantId}>
            <GrantCard grant={grant} />
          </div>
        ))}
      </Paper>
    </>
  )
}

export default Grants 