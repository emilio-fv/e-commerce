const express = require('express');
const cors = require('cors');
const port = 8000;
// TODO: import router 

require('./config/mongoose.config');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// TODO: import routes

app.listen(port, () => {
    console.log(`You are listening on port ${port} for requests to respond to.`)
});