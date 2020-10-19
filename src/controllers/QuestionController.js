import QuestionService from '../services/QuestionService.js';

export default class QuestionController {
    async handleCases(res, callback) {
        try {
            const data = await callback(QuestionService.build());
            res.status(200).json(data);
        } catch (err) {
            res.status(err.httpStatusCode).json(err.message);
        }
    }

    async getAll(req, res) {
      this.handleCases(res, async (questionService) => {return await questionService.getAllQuestions()} );
    }

    async getModerated(req, res) {
        this.handleCases(res, async (questionService) => { return await questionService.getAllModeratedQuestions() });
    }

    async getUnModerated(req, res) {
        this.handleCases(res, async (questionService) => { return await questionService.getAllUnModeratedQuestions() });
    }

    async post(req, res) {
        this.handleCases(res, async (questionService) => { return await questionService.createNewQuestion(req.body) });
    }

    async delete(req, res) {
        try {
            await QuestionService.build().deleteQuestion(req.params.id);
            res.status(200).json('Question successfully deleted');
        } catch (err) {
            res.status(err.httpStatusCode).json(err.message);
        }
    }
}
