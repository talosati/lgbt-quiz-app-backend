import QuestionService from '../services/QuestionService.js';

export default {
    async getAll(req, res) {
        return await this.handleGet(async s => await s.getAllQuestions());
    },
    async getModerated(req, res) {
        return await this.handleGet(async s => await s.getAllModeratedQuestions());
    },
    async getUnModerated(req, res) {
        return await this.handleGet(async s => await s.getAllUnModeratedQuestions());
    },
    async handleGet(req, res, callback) {
        try {
            const data =  await callback(QuestionService.build())
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
