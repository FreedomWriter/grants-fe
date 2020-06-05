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
  disableCollegeSubmitButton,
  setDisableCollegeSubmitButton,
  disableWorkHistorySubmitButton,
  setDisableWorkHistorySubmitButton,
  setBioFormState,
}) {
  return (
    <>
      <WriterContactInfoForm
        contactFormState={contactFormState}
        handleContactChanges={handleContactChanges}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        enableButton={enableButton}
      />
      <WriterEducationForm
        educationFormState={educationFormState}
        setEducationFormState={setEducationFormState}
        handleEducationChanges={handleEducationChanges}
        writersColleges={writersColleges}
        setWritersColleges={setWritersColleges}
        handleCollegeSubmit={handleCollegeSubmit}
        setDisableCollegeSubmitButton={setDisableCollegeSubmitButton}
        disableCollegeSubmitButton={disableCollegeSubmitButton}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        enableButton={enableButton}
      />
      <WriterWorkHistoryForm
        workHistoryFormState={workHistoryFormState}
        setWorkHistoryFormState={setWorkHistoryFormState}
        handleWorkHistoryChanges={handleWorkHistoryChanges}
        handleWorkHistorySubmit={handleWorkHistorySubmit}
        disableWorkHistorySubmitButton={disableWorkHistorySubmitButton}
        setDisableWorkHistorySubmitButton={setDisableWorkHistorySubmitButton}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        enableButton={enableButton}
      />
      <WriterBioForm
        bioFormState={bioFormState}
        setBioFormState={setBioFormState}
        handleBioChanges={handleBioChanges}
        formHelperText={formHelperText}
        handleValidation={handleValidation}
        enableButton={enableButton}
      />
    </>
  );
}
