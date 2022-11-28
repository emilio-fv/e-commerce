const express = require('express');
const cors = require('cors');
const port = 8000;
const cookieParser = require('cookie-parser');
const { userRouter } = require('./routes/user.route') 

require('dotenv').config();

require('./config/mongoose.config');

const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);


app.listen(port, () => {
    console.log(`You are listening on port ${port} for requests to respond to.`)
});