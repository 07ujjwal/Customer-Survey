import { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Survey.css";

function Survey() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user._id);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/questions");
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitSurvey();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitSurvey = async () => {
    try {
      const surveyData = {
        userId: user._id,
        answers: Object.keys(answers).map((questionId) => ({
          questionId,
          answer: answers[questionId],
        })),
      };

      await axios.post("http://localhost:4000/api/surveys", surveyData);
      console.log(surveyData);
      navigate("/complete");
    } catch (error) {
      console.error("Error submitting survey", error);
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);

  return (
    <div className="survey-container">
      <h2>Customer Survey</h2>
      <div className="index">
        {currentQuestionIndex + 1}/{questions.length}
      </div>
      <div className="question-text">
        {` ${currentQuestionIndex + 1} . `}
        {currentQuestion.text}
      </div>

      <div className="answer-container">
        {currentQuestion.type === "rating" ? (
          <div className="rating-options">
            {Array.from({ length: currentQuestion.ratingScale }, (_, i) => i + 1).map((rating) => (
              <Button
                key={rating}
                className={`rating-button ${answers[currentQuestion._id] == rating ? "selected" : ""}`}
                onClick={() => handleAnswerChange(currentQuestion._id, rating)}
              >
                {rating}
              </Button>
            ))}
          </div>
        ) : (
          <textarea
            value={answers[currentQuestion._id] || ""}
            onChange={(e) => handleAnswerChange(currentQuestion._id, e.target.value)}
            placeholder="Your feedback"
          />
        )}
      </div>

      <div className="navigation-buttons">
        <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>

        <Button onClick={handleNext} className="next">
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default Survey;
