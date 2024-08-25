import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function All_Applications() {
  return (
    <div class="card">
      <div className="card-header card-header-custom">All Applications</div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table id="order-listing" class="table">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Application Title</th>
                    <th>Department</th>
                    <th>Examination</th>
                    <th>Payment Status</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/admin/application-details/:id">1</Link>
                    </td>
                    <td>2012/08/03</td>
                    <td>Edinburgh</td>
                    <td>New York</td>
                    <td>$3200</td>
                    <td>
                      <label class="badge badge-info">On hold</label>
                    </td>
                    <td>
                      <FaEdit
                      // onClick={() =>
                      //   navigate({
                      //     /* `/admin/application-details/${application.applicationId}` */
                      //   })
                      // }
                      />
                      <FaTrash
                      // onClick={() => deleteApplicationHandler()}
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

export default All_Applications;
