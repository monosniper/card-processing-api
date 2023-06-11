const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = 7878

const indexRouter = require('./routes/index');
const authMiddleware = require("./middlewares/auth");

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(cors());
app.use(authMiddleware);
app.use('/api', indexRouter);

const server = app.listen(PORT, (host) => {
    console.log('Server started at port ' + PORT)
})

server.timeout = 50100;

module.exports = app;
