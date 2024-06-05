import express from "express";
import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";
import AdminRoute from "./routes/AdminRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(AdminRoute);

app.listen(5000, () => console.log("Server is running on port 5000"));
