import React from "react";
import WriterContactInfoForm from "./WriterContactInfoForm";
import WriterEducationForm from "./WriterEducationForm";
import WriterWorkHistoryForm from "./WriterWorkHistoryForm";
import WriterBioForm from "./WriterBioForm";

export default function ReviewForm({
  bioFormState,
  handleBioChanges,
  handleValidation,
  formHelperText,
  contactFormState,
  handleContactChanges,
  setDisableButton,
  handleEducationChanges,
  setEducationFormState,
  educationFormState,
  handleWorkHistoryChanges,
  workHistoryFormState,
  setWorkHistoryFormState,
  enableButton,
  writersColleges,
  setWritersColleges,
  handleCollegeSubmit,
  handleWorkHistorySubmit,
  handleWriterBioSubmit,
  disableCollegeSubmitButton,
  setDisableCollegeSubmitButton,
}) {
  return (
    <>
      <WriterContactInfoForm
        contactFormState={contactFormState}
        handleContactChanges={handleContactChanges}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        setDisableButton={setDisableButton}
      />
      <WriterEducationForm
        handleCollegeSubmit={handleCollegeSubmit}
        handleEducationChanges={handleEducationChanges}
        educationFormState={educationFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        setEducationFormState={setEducationFormState}
        enableButton={enableButton}
        writersColleges={writersColleges}
        setWritersColleges={setWritersColleges}
        disableCollegeSubmitButton={disableCollegeSubmitButton}
        setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
      />
      <WriterWorkHistoryForm
        handleWorkHistorySubmit={handleWorkHistorySubmit}
        handleWorkHistoryChanges={handleWorkHistoryChanges}
        workHistoryFormState={workHistoryFormState}
        setWorkHistoryFormState={setWorkHistoryFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        setDisableButton={setDisableButton}
      />
      <WriterBioForm
        handleBioChanges={handleBioChanges}
        bioFormState={bioFormState}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        handleWriterBioSubmit={handleWriterBioSubmit}
      />
    </>
  );
}
