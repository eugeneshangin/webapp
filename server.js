const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('dist/spa'));

app.listen(port, () => console.log(`App listening at http://0.0.0.0:${port}`));
