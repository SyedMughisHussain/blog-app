import express from 'express';
import dotenv from 'dotenv';

const app = express()

dotenv.config({
    path: './.env'
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app;