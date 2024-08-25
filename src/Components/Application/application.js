import React, { useState } from "react";
import Input_Field from "../FormFields/input_field";
import Button from "../Button/button";
import Status from "../Modals/status";
import Remarks from "../Modals/remarks";

function Application() {
  const [showRemarksModal, setRemarksShowModal] = useState(false);
  const [showStatusModal, setStatusShowModal] = useState(false);

  const handleShowRemarks = () => setRemarksShowModal(true);
  const handleShowStatus = () => setStatusShowModal(true);

  const handleCloseRemarksModal = () => setRemarksShowModal(false);
  const handleCloseStatusModal = () => setStatusShowModal(false);
  return (
    <div class="col-12 grid-margin">
      <div class="card">
        <div className="card-header card-header-custom">Application Detail</div>
        <div class="card-body">
          <form class="form-sample">
            <div class="row">
              <Input_Field
                label="Apply For"
                type="text"
                name="apply"
                placeholder="Apply For"
                value="apply"
                col_size="6"
              />
              <Input_Field
                label="Last Examination"
                type="text"
                name="lastexamination"
                placeholder="your last examination"
                value="lastexamination"
                col_size="6"
              />
              <Input_Field
                label="Department Name"
                type="text"
                name="departmentname"
                placeholder="Write your department name"
                value="departmentname"
                col_size="6"
              />
              <Input_Field
                label="Roll No"
                type="text"
                name="rollno"
                placeholder="Write your roll no"
                value="rollno"
                col_size="6"
              />
              <Input_Field
                label="Reg No"
                type="text"
                name="regno"
                placeholder="Write your reg no"
                value="regno"
                col_size="6"
              />
              <Input_Field
                label="Passed"
                type="text"
                name="passed"
                placeholder="Write your passed Examination"
                value="passed"
                col_size="6"
              />
              <Input_Field
                label="To"
                type="text"
                name="to"
                placeholder="Write your to"
                value="to"
                col_size="6"
              />
              <Input_Field
                label="Session"
                type="text"
                name="session"
                placeholder="Write your Session	"
                value="session"
                col_size="6"
              />
              <div className="col-md-6  p-0">
                <Input_Field
                  label="Status"
                  type="text"
                  name="status"
                  placeholder="Write your Status"
                  value="status"
                  col_size="12"
                />
                <div className="col-md-12 d-flex justify-content-end">
                  <Button
                    name="Update status"
                    type="button"
                    color="primary"
                    onClick={handleShowStatus}
                    width="30%"
                  />
                </div>
                <Status
                  showModal={showStatusModal}
                  handleCloseModal={handleCloseStatusModal}
                />
              </div>
              <div className="col-md-6  p-0">
                <Input_Field
                  label="Remarks"
                  type="text"
                  name="remarks"
                  placeholder="Write your remarks"
                  value="remarks"
                  col_size="12"
                />
                <div className="col-md-12 d-flex justify-content-end">
                  <Button
                    name="Update remarks"
                    type="button"
                    color="primary"
                    onClick={handleShowRemarks}
                    width="30%"
                  />
                </div>
                <Remarks
                  showModal={showRemarksModal}
                  handleCloseModal={handleCloseRemarksModal}
                />
              </div>
            </div>
          </form>
          <div class="card-body mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="user-img">
                  <img
                    src="../../fa.png"
                    style={{ width: "12rem", height: "20rem" }}
                    alt="voucher"
                  />
                </div>
                <div className="user-Name">
                  <h4>Voucher </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
