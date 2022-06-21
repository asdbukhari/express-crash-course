const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Members");

const PORT = process.env.PORT || 5000;

const app = express();

// init Logger Middleware
app.use(logger);

// Handlebars Middleware
// //app.engine("handlebars", engine());
// app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) =>
//   res.render("index", {
//     title: "Member App",
//     members,
//   })
// );

// Set static folder
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, console.log(`server is running on port ${PORT}`));
