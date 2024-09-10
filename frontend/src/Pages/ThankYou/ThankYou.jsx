import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./ThankYou.css";
import { useEffect } from "react";


function ThankYou() {
  const navigate = useNavigate();
   
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5 * 10000);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="thankyou-container">
      <h1>Thank You for Completing the Survey!</h1>
      <p>Your feedback is highly valuable to us.</p>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </div>
  );
}

export default ThankYou;
