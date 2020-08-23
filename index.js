const port = 4001;

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/controllers/index')(app);

app.get('/', (req, res) => res.send("ok!"));

app.listen(port, () => {
  console.log(`API is running on port ${ port }.`)
});
