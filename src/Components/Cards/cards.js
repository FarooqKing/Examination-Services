import React from "react";

function Cards({ card_name, count, icon }) {
  return (
    <div className="col-md-3 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title text-md-center text-xl-left">{card_name}</p>
          <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
            <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
              {count}
            </h3>
            <i
              className={`${icon} icon-md text-muted mb-0 mb-md-3 mb-xl-0`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
