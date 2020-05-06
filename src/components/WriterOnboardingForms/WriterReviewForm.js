import React from "react";
import WriterContactInfoForm from "./WriterContactInfoForm";
import WriterEducationForm from "./WriterEducationForm";
import WriterWorkHistoryForm from "./WriterWorkHistoryForm";
import WriterBioForm from "./WriterBioForm";

export default function ReviewForm({
  formState,
  setFormState,
  handleChanges,
  formHelperText,
  handleValidation,
  contactFormState,
  handleContactChanges,
  setDisableButton,
  handleEducationChanges,
  setEducationFormState,
  educationFormState,
  handleWorkHistoryChanges,
  workHistoryFormState,
  setWorkHistoryFormState,
}) {
  return (
    <>
      <WriterContactInfoForm
        contactFormState={contactFormState}
        handleContactChanges={handleContactChanges}
        setFormState={setFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        setDisableButton={setDisableButton}
      />
      <WriterEducationForm
        handleEducationChanges={handleEducationChanges}
        educationFormState={educationFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        setEducationFormState={setEducationFormState}
        setDisableButton={setDisableButton}
      />
      <WriterWorkHistoryForm
        handleWorkHistoryChanges={handleWorkHistoryChanges}
        workHistoryFormState={workHistoryFormState}
        setWorkHistoryFormState={setWorkHistoryFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        setDisableButton={setDisableButton}
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
