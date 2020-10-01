import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import system from './src/routes/system.routes.js';
// import user from './src/routes/user.routes.js';
import question from './src/routes/question.routes.js';

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'))

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', system);
// app.use('/users', user);
app.use('/questions', question);

app.listen(PORT, () => console.log('Server Started'));
