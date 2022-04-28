require("dotenv").config();

const express = require("express")
const app = express();
const fs = require("express");
const PORT = process.env.PORT || 3000

app.use(express.json());

app.listen(PORT, () => console.log("Quiz app is running on port: " + PORT))

// Router------------------------
const itemRouter = require("../routes/quiz_route.js");
app.use("/api/items", itemRouter);