export default function CustomInput({
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  className = "",
}) {
  return (
    <input
      type={type}
      className={`form-control ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
