import React from 'react'

const GrantCard = props => {
  return (
    <div>
      <h3>{props.grant.grantName}</h3>
      <p>{props.grant.grantDescription}</p>
    </div>
  )
}

export default GrantCard;