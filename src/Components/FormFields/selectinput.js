import React from "react";

function SelectInput({
  name,
  value,
  label,
  onChange,
  onBlur,
  errors,
  touched,
}) {
  return (
    <div className="col-md-12">
      <label htmlFor="status" className="form-label">
        <h4 className="profile-heading">{label}</h4>
      </label>

      <select
        className="form-control"
        id="status"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="Pending">Pending</option>
        <option value="Inprogress">Inprogress</option>
        <option value="Complete">Complete</option>
      </select>
      {errors && touched && <div className="form-error">{errors}</div>}
    </div>
  );
}

export default SelectInput;
