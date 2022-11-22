// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");

// const app = express();

// app.set("view engine", "ejs"); //ejs is for templating

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

// app.listen(3000, function () {
//   console.log("Server is running on port 3000.");
// });

const movies = [];
const ratings = [];
function run() {
  for (i = 0; i < 5; i++) {
    movies[i] = $("#movie-name" + (i + 1)).val();
    ratings[i] = parseInt($("#rating" + (i + 1)).val());
    console.log(movies);
    console.log(ratings);
  }
}
