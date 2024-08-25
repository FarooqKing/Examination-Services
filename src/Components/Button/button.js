import React from "react";

function Button({ name, type, color, onClick, width }) {
  return (
    <button
      type={type}
      className={`btn btn-inverse-${color} btn-fw`}
      onClick={onClick ? onClick : undefined}
      style={width ? { width: width } : undefined} // Corrected style prop syntax
    >
      {name}
    </button>
  );
}

export default Button;
