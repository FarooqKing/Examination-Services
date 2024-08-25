import React from "react";
import { Modal } from "react-bootstrap";
import Degree_Service from "../Services/degree_Service";
import Migration_Service from "../Services/migration_service";

function Service_Modal({ showModal, handleCloseModal }) {
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
        <ul
          class="nav nav-pills nav-pills-success"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Apply For Degree
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Apply for Migration
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <Degree_Service />
          </div>
          <div
            class="tab-pane fade "
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Migration_Service />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Service_Modal;
