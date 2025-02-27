const express = require("express");
const app = express();

console.dir(app);

let port = 7777;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// Default route for the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the root page!");
});

// __________Route for /:username
// app.get("/:username/", (req, res) => {
    // let { username} = req.params;
    // res.send(`Welcome to the page of @${username}`);
// });

// ___________Route for /:username/:id
// app.get("/:username/:id", (req, res) => {
    // let { username, id } = req.params;
    // res.send(`Welcome to the page of @${username}`);
// });

// ___________Route for search
app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send(`Nothing found if nothing searched`);
    }
    res.send(`You searched for ${q}`);
});