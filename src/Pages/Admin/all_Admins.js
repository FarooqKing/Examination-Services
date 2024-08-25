import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function All_Admins() {
  return (
    <div class="card">
      <div className="card-header card-header-custom">All Admins</div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table id="order-listing" class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2012/08/03</td>
                    <td>$1500</td>
                    <td>
                      <FaTrash
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

export default All_Admins;
