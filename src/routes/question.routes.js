import express from 'express';
import bodyParser from 'body-parser';
import QuestionController from '../controllers/QuestionController.js';

const router = express.Router();
const jsonParser = bodyParser.json();
const questionController = new QuestionController();

router.use(express.json());

router.get('/', (req, res) => { questionController.getAll(req, res)});
router.get('/moderated', (req, res) => {questionController.getModerated(req, res)});
router.get('/unmoderated', (req, res) => {questionController.getUnModerated(req, res)});

router.post('/', jsonParser, (req, res) => {questionController.post(req, res)});

// router.put('/:id', questionController.put);

router.delete('/:id', questionController.delete);

export default router;
