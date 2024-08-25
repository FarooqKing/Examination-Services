import React, { useState } from "react";
import Button from "../Button/button";
import Edit_Form from "../Modals/edit_form";
import Service_Modal from "../Modals/service_modal";
import Application_Item from "./application_item";

function Apply_For_Services() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div class="col-md-12 col-xl-12 grid-margin stretch-card">
      <div class="card" style={{ border: "0px" }}>
        <div className="card-header card-header-custom d-flex justify-content-between">
          Applied Services
          <Button
            name="Apply For Service"
            type="button"
            color="light"
            onClick={handleShowModal}
          />
          <Service_Modal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table id="order-listing" class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Application For</th>
                      <th scope="col">Last Exam</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Upload Voucher</th>
                      <th scope="col">Status</th>
                      <th scope="col">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Application_Item />
                    <Application_Item />
                    <Application_Item />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply_For_Services;
