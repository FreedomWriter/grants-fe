import React from 'react'

const GrantCard = props => {
  return (
    <div>
      <h2>{props.grant.grantName}</h2>
      <p>{props.grant.grantDescription}</p>
    </div>
  )
}

export default GrantCard;