import React from "react";
import ApplicantContactInfo from "./ApplicantContactInfo";
import OrgInformation from "./OrgInformation";
import NonOrgInformation from "./NonOrgInformation";

import { useStyles } from "./ApplicantForm.styles";

export default function ReviewForm({
  formState,
  setFormState,
  handleChanges,
  formHelperText,
  handleValidation,
}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ApplicantContactInfo
        formState={formState}
        setFormState={setFormState}
        handleChanges={handleChanges}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
      {/* render appropariate additional information based on formState.org boolean */}
      {formState.org ? (
        <OrgInformation
          formState={formState}
          setFormState={setFormState}
          handleChanges={handleChanges}
          formHelperText={formHelperText}
          handleValidation={handleValidation}
        />
      ) : (
        <NonOrgInformation
          formState={formState}
          setFormState={setFormState}
          handleChanges={handleChanges}
          formHelperText={formHelperText}
          handleValidation={handleValidation}
        />
      )}
    </div>
  );
}
