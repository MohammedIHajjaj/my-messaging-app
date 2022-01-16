const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const messageRoute = require("./controllers/messagesController");

app.use("/messages", messageRoute);

app.listen(3001, () => {
  console.log("the app is running on port 3001");
});