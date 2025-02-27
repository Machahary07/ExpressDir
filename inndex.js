const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/rolldice", (req, res) => {
    const diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("dice", { diceVal });
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("instagram",{username});
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});