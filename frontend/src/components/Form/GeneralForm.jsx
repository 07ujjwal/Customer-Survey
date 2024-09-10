
import  { useState } from "react";
import "./GeneralForm.css";

function GeneralForm({ fields, onSubmit, submitButtonLabel }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="formElement">
            <label htmlFor={field.name}>{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">{submitButtonLabel}</button>
      </form>
    </div>
  );
}

export default GeneralForm;
