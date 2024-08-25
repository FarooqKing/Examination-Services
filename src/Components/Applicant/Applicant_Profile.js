import React, { useState } from "react";
import Input_Field from "../FormFields/input_field";
import Button from "../Button/button";
import Edit_Form from "../Modals/edit_form";

function Applicant_Profile() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div class="col-md-12 col-xl-12 grid-margin stretch-card">
      <div class="card" style={{ border: "0px" }}>
        <div className="card-header card-header-custom">Applicant Profile</div>
        <div class="card-body mt-4">
          <div class="media">
            <img
              class="mr-3 w-25 rounded"
              src="../../fa.png"
              alt="sample image"
            />
            <div class="media-body ml-4">
              <form class="form-sample">
                <div class="row">
                  <Input_Field
                    label="Applicant Name"
                    type="text"
                    name="applicant name"
                    placeholder="Write your name"
                    value="name"
                    col_size="6"
                  />
                  <Input_Field
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Write your email"
                    value="email"
                    col_size="6"
                  />
                  <Input_Field
                    label="Father Name"
                    type="text"
                    name="Faher name"
                    placeholder="Write your father name"
                    value="fathername"
                    col_size="6"
                  />
                  <Input_Field
                    label="Gender"
                    type="text"
                    name="gender"
                    placeholder="Write your gender"
                    value="gender"
                    col_size="6"
                  />
                  <Input_Field
                    label="Domicile"
                    type="text"
                    name="domicile"
                    placeholder="Write your domicile"
                    value="domicile"
                    col_size="6"
                  />
                  <Input_Field
                    label="Nationality"
                    type="text"
                    name="nationality"
                    placeholder="Write your Nationality"
                    value="nationality"
                    col_size="6"
                  />
                  <Input_Field
                    label="Contact No"
                    type="text"
                    name="contactno"
                    placeholder="Write your Contact Number"
                    value="contactno"
                    col_size="6"
                  />
                  <Input_Field
                    label="Cnic"
                    type="text"
                    name="cnic"
                    placeholder="Write your Cnic"
                    value="cnic"
                    col_size="6"
                  />
                  <Input_Field
                    label="Address"
                    type="text"
                    name="address"
                    placeholder="Write your Address"
                    value="address"
                    col_size="6"
                  />
                  <div className="col-md-12 d-flex justify-content-end">
                    <Button
                      name="Edit"
                      type="button"
                      color="primary"
                      onClick={handleShowModal}
                      width="20%"
                    />
                  </div>
                  <Edit_Form
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicant_Profile;
