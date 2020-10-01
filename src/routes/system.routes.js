import express from 'express';
import helloWorldController from '../controllers/helloWorldController.js';

const router = express.Router();

router.get('/', helloWorldController.get);

export default router;
