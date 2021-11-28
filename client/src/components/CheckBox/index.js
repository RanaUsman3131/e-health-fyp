import React from "react";
import "./style.css";
export default function index({ label, ...props }) {
  return (
    <>
      <label className="checkWrapper">
        {label}
        <input type="radio" {...props} />
        <span className="checkmark"></span>
      </label>
    </>
  );
}
