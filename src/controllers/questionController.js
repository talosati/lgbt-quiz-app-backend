import QuestionService from '../services/QuestionService.js';

export default {
    async get(req, res) {
        try {
            const data = await QuestionService.build().getAllQuestions();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }
}
