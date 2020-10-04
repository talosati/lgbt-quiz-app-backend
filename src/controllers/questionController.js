import QuestionService from '../services/QuestionService.js';

export default {
    async getAll(req, res) {
        try {
            const data = await QuestionService.build().getAllQuestions();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(error.message);
        }
    },
    async getModerated(req, res) {
        try {
            const data = await QuestionService.build().getAllModeratedQuestions();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(error.message);
        }
    },
    async getUnModerated(req, res) {
        try {
            const data = await QuestionService.build().getAllUnModeratedQuestions();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(error.message);
        }
    },

    async post(req, res) {
        try {
            const data = await QuestionService.build().createNewQuestion(req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },

    async delete(req, res) {
        try {
            await QuestionService.build().deleteQuestion(req.params.id);
            res.status(200).json('Deleted question');
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}
