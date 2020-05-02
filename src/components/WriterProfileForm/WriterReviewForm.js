import React from "react";
import WriterContactInfoForm from "./WriterContactInfoForm";
import WriterEducationForm from "./WriterEducationForm";
import WriterWorkHistoryForm from "./WriterWorkHistoryForm";
import WriterBioForm from "./WriterBioForm";

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
      <WriterContactInfoForm
        formState={formState}
        handleChanges={handleChanges}
        setFormState={setFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
      <WriterEducationForm
        handleChanges={handleChanges}
        formState={formState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
      <WriterWorkHistoryForm
        handleChanges={handleChanges}
        formState={formState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
      <WriterBioForm
        handleChanges={handleChanges}
        formState={formState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
      />
    </>
  );
}
