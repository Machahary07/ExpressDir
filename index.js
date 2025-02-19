const express = require('express');
const app = express()

console.dir(app);

let port = 7777;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
    res.send('Hello World!')
});