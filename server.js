require("dotenv").config();

const express = require("express")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
const PORT = process.env.PORT || 3000
let cors =require("cors");
app.use(cors({origin:"*"}));    
app.use(express.json());

app.listen(PORT, () => console.log("Quiz app is running on port: http://localhost:" + PORT))

// ROUTER
const itemRouter = require("./routes/quiz_route.js");
app.use("/api/items", itemRouter);