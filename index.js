const port = 3333;

// const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database/index');

const app = express();

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
    console.log(`API is running on port ${ port }.`);
});
