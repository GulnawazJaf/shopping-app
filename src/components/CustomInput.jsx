import { useState } from "react";

export default function CustomInput({
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  className = "",
  autoComplete = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type for password toggle
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="position-relative">
      <input
        type={inputType}
        className={`form-control ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
      />

      {/* Show toggle only for password fields */}
      {type === "password" && (
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2"
          onClick={() => setShowPassword(!showPassword)}
          style={{ zIndex: 2 }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}
