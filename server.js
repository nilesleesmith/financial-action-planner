const express = require("express");
const path = require("path");
const api = require("./routes/api");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", api);

app.get("/", function (req, res) {
  res.render("index", { pageTitle: "Financial Action Planner" });
});

app.get("/assessment", function (req, res) {
  res.render("assessment", { pageTitle: "Quick Assessment" });
});

app.use(function (req, res) {
  res.status(404).render("not-found", { pageTitle: "Page Not Found" });
});

app.listen(port, function () {
  console.log(`Financial Action Planner running at http://localhost:${port}`);
});
