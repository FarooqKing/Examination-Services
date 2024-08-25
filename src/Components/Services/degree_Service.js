import React from "react";
import Input_Field from "../FormFields/input_field";
import Button from "../Button/button";
import Radio_Button from "../FormFields/radio_button";
import { DegreeValidation } from "../Schema/DegreeValidation";
import { useFormik } from "formik";
const initialValues = {
  degreeTitle: "",
  examinationName: "",
  status: "",
  instituteName: "",
  rollNo: "",
  regNo: "",
  passed: "",
  to: "",
  session: "",
};

function Degree_Service() {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: DegreeValidation,
      onSubmit: async (values, action) => {
        const applicationData = {
          title: values.degreeTitle,
          examination_name: values.examinationName,
          roll_no: values.rollNo,
          reg_no: values.regNo,
          department_name: values.instituteName,
          session: values.session,
          regular: values.status,
        };

        // try {
        //   const { data } = await submitApplication(applicationData);

        //   if (!data.success) {
        //     toast.error(data.message);
        //   } else {
        //     toast.success("Applicatin submitted successfully");
        //     action.resetForm();
        //     onRefetch();
        //     onClose();
        //   }
        // } catch (error) {
        //   toast.error("Faild to submit application. Please try again letter.");
        // }
      },
    });
  return (
    <>
      <div className="card">
        <div className="card-header">Apply for Degree</div>
        <div className="card-body">
          <form className="form-sample">
            <div className="row">
              <Input_Field
                label="Application Title"
                type="text"
                name="degreeTitle"
                placeholder="Application Title"
                col_size="6"
                value={values.degreeTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.degreeTitle}
                touched={touched.degreeTitle}
              />

              <Input_Field
                label="Reg No"
                type="text"
                name="regNo"
                placeholder="Write your reg no"
                col_size="6"
                value={values.regNo}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.regNo}
                touched={touched.regNo}
              />
              <Input_Field
                label="Last Attempt Examination"
                type="text"
                name="examinationName"
                placeholder="your last Attempt examination"
                col_size="6"
                value={values.examinationName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.examinationName}
                touched={touched.examinationName}
              />
              <Input_Field
                label="Roll No"
                type="text"
                name="rollNo"
                placeholder="Write your roll no"
                col_size="6"
                value={values.rollNo}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.rollNo}
                touched={touched.rollNo}
              />
              <Radio_Button
                label="Status"
                name="status"
                FirstRadioBtn="Regular"
                SecondRadioBtn="Private"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.status}
                touched={touched.status}
              />
              <Input_Field
                label="Institute Name"
                type="text"
                name="instituteName"
                placeholder="Write your Institute name"
                col_size="6"
                value={values.instituteName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.instituteName}
                touched={touched.instituteName}
              />

              <Input_Field
                label="Session"
                type="text"
                name="session"
                placeholder="Write your Session	"
                col_size="6"
                value={values.session}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.session}
                touched={touched.session}
              />
            </div>
            <div className="col-md-12 d-flex justify-content-end">
              <Button name="Submit" type="submit" color="primary" width="20%" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Degree_Service;
