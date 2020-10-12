import express from 'express';
import bodyParser from 'body-parser';
import userController from '../controllers/userController.js';

const router = express.Router();
const jsonParser = bodyParser.json();

router.use(express.json());

router.get('/', userController.getAll);
router.get('/admins', userController.getAdmins);
router.get('/moderators', userController.getModerators);
router.get('/players', userController.getPlayers);

router.post('/register', jsonParser, userController.register);
router.post('/login', jsonParser, userController.login);

// router.put('/:id', userController.put);

router.delete('/:id', userController.delete);

export default router;
