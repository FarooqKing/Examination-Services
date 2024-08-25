import React from "react";
import Cards from "../../Components/Cards/cards";

function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-5 mb-4 mb-xl-0">
              <h4 className="font-weight-bold">Hi, Welcomeback To! </h4>
              <h4 className="font-weight-normal mb-0">Admin Dashboard,</h4>
            </div>
            <div className="col-12 col-xl-7">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="border-right pr-4 mb-3 mb-xl-0">
                  <p className="text-muted">Balance</p>
                  <h4 className="mb-0 font-weight-bold">$40079.60 M</h4>
                </div>
                <div className="border-right pr-4 mb-3 mb-xl-0">
                  <p className="text-muted">Today’s profit</p>
                  <h4 className="mb-0 font-weight-bold">$175.00 M</h4>
                </div>
                <div className="border-right pr-4 mb-3 mb-xl-0">
                  <p className="text-muted">Purchases</p>
                  <h4 className="mb-0 font-weight-bold">4006</h4>
                </div>
                <div className="pr-3 mb-3 mb-xl-0">
                  <p className="text-muted">Downloads</p>
                  <h4 className="mb-0 font-weight-bold">4006</h4>
                </div>
                <div className="mb-3 mb-xl-0">
                  <button className="btn btn-warning rounded-0 text-white">
                    Downloads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Cards card_name="Total Applicant" count="20" icon="ti-user" />
        <Cards card_name="Applications" count="30" icon="ti-layers-alt" />
        <Cards card_name="Complete Application" count="10" icon="ti-agenda" />
        <Cards card_name="Inprogress Application" count="14" icon="ti-agenda" />
        <Cards card_name="Pending Application" count="6" icon="ti-agenda" />
      </div>
    </>
  );
}

export default Dashboard;
