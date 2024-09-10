import  { useState } from "react";
import axios from "axios";
import "./QuestionForm.css"
import GeneralForm from "../../components/Form/GeneralForm";

function QuestionForm() {
  const [message, setMessage] = useState("");

  const questionFields = [
    { name: "text", label: "Question Text", type: "text", required: true },
    { name: "type", label: "Question Type", type: "text", required: true },
    { name: "ratingScale", label: "Rating Scale", type: "number", required: false },
  ];

  const handleQuestionSubmit = async (formData) => {
    try {
      const sendData = await axios.post("http://localhost:4000/api/questions/", formData);
      setMessage("Question created successfully!");
    } catch (e) {
      setMessage(e.message || "Something went wrong! Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Create a Question</h1>
      <GeneralForm
        fields={questionFields}
        onSubmit={handleQuestionSubmit}
        submitButtonLabel="Create Question"
      />
      {message && (
        <p className={message.includes("successfully") ? "success" : ""}>
          {message}
        </p>
      )}
    </div>
  );
}

export default QuestionForm;
