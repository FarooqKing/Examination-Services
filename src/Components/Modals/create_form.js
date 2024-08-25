import React from "react";
import { Modal } from "react-bootstrap";
import Input_Field from "../FormFields/input_field";
import Button from "../Button/button";
import { ApplicantValidation } from "../Schema/ApplicantValidation";
import { useFormik } from "formik";
const initialValues = {
  name: "",
  // email: "",
  fatherName: "",
  gender: "",
  domicile: "",
  address: "",
  nationality: "",
  contact: "",
  cnic: "",
};
function Create_Form({ showModal, handleCloseModal }) {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ApplicantValidation,
      onSubmit: async (values, action) => {
        console.log("Creating form");
        const applicantData = {
          name: values.name,
          // email: values.email,
          fatherName: values.fatherName,
          gender: values.gender,
          domicel: values.domicile,
          address: values.address,
          nationalty: values.nationality,
          contact: values.contact,
          cnic: values.cnic,
        };

        // const response = await addApplicant(applicantData).unwrap();

        // if (response.success) {
        //   toast.success(response.message);
        //   action.resetForm();
        //   handleCloseModal();
        //   onRefetch();
        // } else {
        //   toast.error(response.message);
        // }
      },
    });
  console.log(
    values.name,
    values.fatherName,
    values.domicile,
    values.gender,
    values.address,
    values.nationality,
    values.city,
    values.contact,
    values.cnic
  );
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton className="modal-header-custome">
        <Modal.Title id="example-modal-sizes-title-lg">
          Create Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <form className="form-sample">
          <div className="row">
            <Input_Field
              label="Applicant Name"
              type="text"
              name="name"
              placeholder="Write your name"
              value={values.name}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            />
            <Input_Field
              label="Father Name"
              type="text"
              name="fatherName"
              placeholder="Write your father name"
              value={values.fatherName}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.fatherName}
              touched={touched.fatherName}
            />
            <Input_Field
              label="Gender"
              type="text"
              name="gender"
              placeholder="Write your gender"
              value={values.gender}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.gender}
              touched={touched.gender}
            />
            <Input_Field
              label="Domicile"
              type="text"
              name="domicile"
              placeholder="Write your domicile"
              value={values.domicile}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.domicile}
              touched={touched.domicile}
            />
            <Input_Field
              label="Nationality"
              type="text"
              name="nationality"
              placeholder="Write your Nationality"
              value={values.nationality}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.nationality}
              touched={touched.nationality}
            />
            <Input_Field
              label="Contact No"
              type="text"
              name="contact"
              placeholder="Write your Contact Number"
              value={values.contact}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.contact}
              touched={touched.contact}
            />
            <Input_Field
              label="Cnic"
              type="text"
              name="cnic"
              placeholder="Write your Cnic"
              value={values.cnic}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.cnic}
              touched={touched.cnic}
            />
            <Input_Field
              label="Address"
              type="text"
              name="address"
              placeholder="Write your Address"
              value={values.address}
              col_size="6"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.address}
              touched={touched.address}
            />
            <div className="col-md-12 d-flex justify-content-end">
              <Button name="Create" type="button" color="primary" width="20%" />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Create_Form;
