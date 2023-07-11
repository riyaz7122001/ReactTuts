require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./database/db");

// routes names here
const todo = require("./routes/routes");
//setting up the server..
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connection();
  console.log(`listening on port ${PORT}`);
});

// middleware function
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// setting routes..
app.use("/api/todo", todo);

// setting middleware for errors handling...
