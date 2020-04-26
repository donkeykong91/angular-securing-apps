import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import bodyParser from 'body-parser';

const PORT = 4000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (cors());

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
})