const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require("./router")

app.get('/ping', function (req, res) {
 return res.send('pong');
});


mongoose.connect('mongodb://it2810-74.idi.ntnu.no:27017/prosjekt3', { useNewUrlParser: true, useUnifiedTopology: true })


var port = process.env.PORT || 8080;
mongoose.connection.once('open', () => {
  console.log("MongoDB db connection established successfully")
})

app.get("/", (req, res) => res.send("Hello world"))

app.use("/api", routes)
app.listen(port, () => console.log("test" + port)) 
