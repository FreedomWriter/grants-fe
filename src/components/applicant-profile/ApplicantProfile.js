import React from 'react'
import BioCard from './BioCard'
import GrantsList from './grants-list/Grants'
import LeftPanel from './LeftPanel'

const ApplicantProfile = () => {

  return (
    <div>
      <LeftPanel />
      <BioCard />
      <GrantsList />
    </div>
  )
}

export default ApplicantProfile 