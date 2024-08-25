import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function All_Applicants() {
  return (
    <div class="card">
      <div className="card-header card-header-custom">All Applicants</div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table id="order-listing" class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/admin/applicants-detail/:id">1</Link>
                    </td>
                    <td>2012/08/03</td>
                    <td>Edinburgh</td>
                    <td>New York</td>
                    <td>$1500</td>
                    <td>
                      <FaEdit
                      // onClick={() =>
                      //   navigate({
                      //     /* `/admin/application-details/${application.applicationId}` */
                      //   })
                      // }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_Applicants;
