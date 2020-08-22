const port = 4001;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/controllers/index')(app);

app.get('/', (req, res) => res.send("ok!"));

app.listen(port, () => {
  console.log(`BACKEND is running on port ${ port }.`)
});
