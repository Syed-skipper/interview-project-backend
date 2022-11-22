const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./Router/studentRouter");
const mongo = require("./connect");

dotenv.config();
mongo.connect();

app.use(cors());
app.use(express.json());

app.use("/student", router);

app.listen(process.env.PORT);
