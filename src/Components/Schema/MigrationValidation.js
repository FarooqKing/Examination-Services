import * as Yup from "yup";

export const MigrationValidation = Yup.object().shape({
  to: Yup.string().required(
    "Name of the institute to which user wants to migrate is required"
  ),
  passed: Yup.boolean().required("Passed field must be specified"),
  session: Yup.date().required("Session date is required"),
  degreeTitle: Yup.string().required("Examination name is required"),
  status: Yup.boolean().required("status field must be specified"),
  rollNo: Yup.string().required("Roll number is required"),
  regNo: Yup.string().required("Registration number is required"),
});
