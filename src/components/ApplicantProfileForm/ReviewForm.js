import React from "react";
import ApplicantContactInfo from "./ApplicantContactInfo";
import OrgInformation from "./OrgInformation";
import NonOrgInformation from "./NonOrgInformation";

import { useStyles } from "./ApplicantForm.styles";

export default function ReviewForm({ formState, setFormState, handleChanges }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ApplicantContactInfo
        formState={formState}
        setFormState={setFormState}
        handleChanges={handleChanges}
      />
      {formState.org ? (
        <OrgInformation
          formState={formState}
          setFormState={setFormState}
          handleChanges={handleChanges}
        />
      ) : (
        <NonOrgInformation
          formState={formState}
          setFormState={setFormState}
          handleChanges={handleChanges}
        />
      )}
    </div>
  );
}
