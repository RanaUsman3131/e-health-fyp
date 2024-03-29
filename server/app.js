const app = require("express")();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const { json, urlencoded } = require("express");

require("./src/dbConfig/connection");

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      callback(null, true); // allow these domains
    },
  })
);
app.use("/api", router);

app.get("/live-session", (req, res) =>
  res.sendFile(__dirname + "/liveCall.html")
);
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
app.listen(4500, () => console.log("Server Running on Port 4500"));
