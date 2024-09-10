import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserForm from "./Pages/Home/UserForm";
import Survey from "./Pages/Survey/Survey";
import ThankYou from "./Pages/ThankYou/ThankYou";
import QuestionForm from "./Pages/Addquestions/QuestionForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/complete" element={<ThankYou />} />
        <Route path="/addquestions" element={<QuestionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
