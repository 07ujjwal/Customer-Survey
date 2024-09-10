const connectDb = require("./config/database");
const express = require("express");
const cors = require("cors");
const surveyRoutes = require("./Routes/surveyRoutes");
const userRoutes = require("./Routes/userRoutes");
const questionsRoutes = require("./Routes/questionRoutes");

const app = express();

connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/surveys", surveyRoutes);
app.use("/api/users", userRoutes);
app.use("/api/questions", questionsRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
