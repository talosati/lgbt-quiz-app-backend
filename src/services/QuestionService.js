import questionRepository from '../repositories/questionRepository.js';

export default class QuestionService {
    constructor(questionRepo) {
        this.questionRepository = questionRepo;
    }

    async getAllQuestions() {
        return await this.questionRepository.getAllQuestions();
    }

    static build() {
        return new QuestionService(questionRepository);
    }
}
