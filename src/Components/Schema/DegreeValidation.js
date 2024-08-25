import * as Yup from "yup";

export const DegreeValidation = Yup.object().shape({
  degreeTitle: Yup.string().required("Degree Title is required"),
  examinationName: Yup.string().required("Examination Name is required"),
  regular: Yup.boolean().required("Regular field is required"),
  instituteName: Yup.string().required("Institute Name is required"),
  rollNo: Yup.string().required("Roll No is required"),
  regNo: Yup.string().required("Registration No is required"),
  to: Yup.string().required(
    "Name of the institute to which user wants to migrate is required"
  ),
  passed: Yup.boolean().required("Passed field must be specified"),
  session: Yup.date().required("Session date is required"),
});
