import express from 'express';
import bodyParser from 'body-parser';
import questionController from '../controllers/questionController.js';

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', questionController.get);
router.post('/', jsonParser, questionController.post);

export default router;
