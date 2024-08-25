import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Applicant_Profile from "../../Components/Applicant/Applicant_Profile";
import Application from "../../Components/Application/application";

function Application_Detail() {
  return (
    <>
      <div class="col-md-12 col-xl-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title" style={{ fontSize: "1.5rem" }}>
              Application Detail
            </h2>
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
                  Application
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
                  Profile
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
                <Application />
              </div>
              <div
                class="tab-pane fade "
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <Applicant_Profile />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-md-12">
          <h3>Application Detail</h3>
        </div>

        <Tabs
          defaultActiveKey="Applicant Detail"
          id="fill-tab-example"
          className="mb-3 custom-tab"
          fill
        >
          <Tab eventKey="Applicant Detail" title="Applicant Detail">
           
          </Tab>
        </Tabs>
      </div> */}
    </>
  );
}

export default Application_Detail;
