import express from 'express';
import questionController from '../controllers/questionController.js';

const router = express.Router();

router.get('/', questionController.get);

export default router;
