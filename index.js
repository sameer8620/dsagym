require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const sdeRoutes = require("./routes/sde");
const frazRoutes = require("./routes/fraz");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

app.use(`/${REACT_APP_API_KEY}/sdesheet`, sdeRoutes);
app.use(`${REACT_APP_API_KEY}/dsasheet`, frazRoutes);

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
