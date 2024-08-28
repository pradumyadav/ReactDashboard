import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import router from "./routers/dashbordRoutes.js"; // Correct spelling here if it's "dashboardRoutes.js"

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/dashboardDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
