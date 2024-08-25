import React from "react";
import { Modal } from "react-bootstrap";
import TextArea from "../FormFields/textArea";
import Button from "../Button/button";
import { RemarksValidation } from "../Schema/RemarkValidation";
import { useFormik } from "formik";
const initialValues = {
  remarks: "",
};
function Remarks({ showModal, handleCloseModal }) {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RemarksValidation,
      onSubmit: (values, action) => {
        onSubmitRemark(values.remarks);
      },
    });
  console.log("this is", values.remarks);
  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton className="Applicant-Service-header">
        <Modal.Title
          id="example-modal-sizes-title-lg"
          className="Applicant-Service-title"
        >
          Remarks
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <div id="content" className="content-Applicant">
          <div id="wrapper">
            <form className="row g-4 w-100 ">
              <TextArea
                name="remarks"
                label="Remarks"
                placeholder="Give a remarks"
                value={values.remarks}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.remarks}
                touched={touched.remarks}
              />
              <div className="col-md-12 mt-5 d-flex justify-content-end">
                <Button
                  name="Submit"
                  type="Submit"
                  color="primary"
                  width="20%"
                />
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Remarks;
