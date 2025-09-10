require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const authRoute = require('./routes/AuthRoutes');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();


app.use(cors({
  origin: [process.env.Dashboard_url, process.env.Frontend_url ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("App started!");
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
   .then(() => console.log("MongoDB is  connected successfully"))
   .catch((err) => console.error(err));
});
app.use("https://zerodha-clone-server.onrender.com/", authRoute);


