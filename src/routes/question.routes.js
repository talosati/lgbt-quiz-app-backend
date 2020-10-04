import express from 'express';
import bodyParser from 'body-parser';
import questionController from '../controllers/questionController.js';

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', questionController.getAll);
router.get('/moderated', questionController.getModerated);
router.get('/unmoderated', questionController.getUnModerated);

router.post('/', jsonParser, questionController.post);

// router.put('/:id', questionController.put);

router.delete('/:id', questionController.delete)

export default router;
