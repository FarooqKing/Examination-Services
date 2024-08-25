import React from "react";
import Button from "../Button/button";
import SelectInput from "../FormFields/selectinput";
import { Modal } from "react-bootstrap";
import { StatusUpdate } from "../Schema/StatusUpdateValidation";
import { useFormik } from "formik";

function Status({ showModal, handleCloseModal }) {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        status: "",
      },
      validationSchema: StatusUpdate,
      onSubmit: async (values) => {
        console.log(values.status);
      },
    });
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
          Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <div id="content" className="content-Applicant">
          <div id="wrapper">
            <form className="row g-4 w-100 ">
              <SelectInput
                name="status"
                label="Status"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.status}
                touched={touched.status}
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

export default Status;
