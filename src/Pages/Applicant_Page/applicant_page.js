import React, { useState } from "react";
import Button from "../../Components/Button/button";
import Applicant_Profile from "../../Components/Applicant/Applicant_Profile";
import Apply_For_Services from "../../Components/Applicant/apply_for_services";
import Create_Form from "../../Components/Modals/create_form";

function Applicant_Page() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div class="col-md-12 col-xl-12 grid-margin stretch-card">
        <div class="card" style={{ border: "0px" }}>
          <div
            style={{
              margin: "3rem  0",
              height: "30rem",
              padding: "13rem 36% ",
            }}
          >
            <p className="d-flex justify-content-center">
              No Profile Found Please Create Your Profile
            </p>
            <div className="d-flex justify-content-center">
              <Button
                name="create-profile"
                type="button"
                onClick={handleShowModal}
                color="primary"
              />

              <Create_Form
                showModal={showModal}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        </div>
      </div>

      <Applicant_Profile />

      <Apply_For_Services />
      <hr />
    </>
  );
}

export default Applicant_Page;
