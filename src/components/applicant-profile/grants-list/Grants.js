import React from 'react'

import GrantCard from './GrantCard'


const Grants = () => {

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
      <h1>Grants: </h1>
      {grants.map((grant) => (
        <div key={grant.grantId}>
          <GrantCard grant={grant} />
        </div>
      ))}
    </>
  )
}

export default Grants 