const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey, bro! I\'ll be a DevOps Engineer! With a Full Pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
