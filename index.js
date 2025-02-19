const express = require('express');
const app = express()

console.dir(app);

let port = 7777;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
    let code = "<h1>Header Tag</h1> <ul> <li>Item 1</li> <li>Item 2</li> <li>Item 3</li> </ul>";
    res.send(code)
});