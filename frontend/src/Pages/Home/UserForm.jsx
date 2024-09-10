import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserForm.css"
import GeneralForm from "../../components/Form/GeneralForm";

function UserForm() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const userFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ];

  const handleUserSubmit = async (formData) => {
    try {
      const sendData = await axios.post("http://localhost:4000/api/users/", formData);

      localStorage.setItem("user", JSON.stringify(sendData.data));
      setMessage("User registered successfully!");

      setTimeout(() => {
        navigate("/survey");
      }, 2000);
    } catch (e) {
      setMessage(e.message || "Something went wrong! Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Create a User</h1>
      <GeneralForm
        fields={userFields}
        onSubmit={handleUserSubmit}
        submitButtonLabel="Create User"
      />
      {message && (
        <p className={message.includes("successfully") ? "success" : ""}>
          {message}
        </p>
      )}
    </div>
  );
}

export default UserForm;
