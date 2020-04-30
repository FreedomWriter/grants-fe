import React from "react";
import ApplicantContactInfo from "./WriterContactInfoForm";
import OrgInformation from "./WriterEducationForm";
import WriterContactInfo from "./WriterContactInfoForm";
import WriterEducation from "./WriterEducationForm";
import WriterWorkHistory from "./WriterWorkHistoryForm";
import WriterBioForm from "./WriterBioForm";
import WriterReview from "./WriterReviewForm";

import { useStyles } from "./WriterForm.styles";

export default function ReviewForm({
  formState,
  setFormState,
  handleChanges,
  formHelperText,
  handleValidation,
}) {
  return (
    <>
      <WriterContactInfo
        formState={formState}
        handleChanges={handleChanges}
        setFormState={setFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
      <WriterEducation
        handleChanges={handleChanges}
        formState={formState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
      <WriterReview
        handleChanges={handleChanges}
        formState={formState}
        formHelperText={formHelperText}
        setFormState={setFormState}
        handleValidation={handleValidation}
      />
    </>
  );
}
