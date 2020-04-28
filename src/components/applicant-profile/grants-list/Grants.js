import React, { useState, useEffect } from './node_modules/react';


const Grants = () => {
  const [grants, setGrants] = useState(['grant 1', 'grant 2', 'grant 3' ])

  useEffect(() => {
    if(!grants) {
      props.getGrants(props.token)
    }
    setGrants(props.grants)
  },[])

  useEffect(() => {
    setGrants(props.grants)
  }, [props.grants])
  
  return(
    <>
      <h1>Grants: </h1>
      {grants && grants.map(grant => (
        <div key={grant.id}>
          <GrantCard grant={grant} />
        </div>
      ))}
    </>
  )
}

export default Grants 