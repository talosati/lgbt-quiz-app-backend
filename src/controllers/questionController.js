import QuestionService from '../services/QuestionService.js';

export default {
    async get(req, res) {
        console.log(req);
        try {
            const data = await QuestionService.build().getAllQuestions();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(error.message);
        }
    },
    async post(req, res) {
        try {
            console.log(req.req);
            const data = await QuestionService.build().createNewQuestion(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
