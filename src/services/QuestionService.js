import questionRepository from '../repositories/questionRepository.js';

export default class QuestionService {
    constructor(questionRepo) {
        this.questionRepository = questionRepo;
    }

    async getAllQuestions() {
        return await this.questionRepository.getAllQuestions();
    }

    async getAllModeratedQuestions() {
        return await this.questionRepository.getAllModeratedQuestions();
    }

    async getAllUnModeratedQuestions() {
        return await this.questionRepository.getAllUnModeratedQuestions();
    }

    async createNewQuestion(reqBody) {
        return await this.questionRepository.createNewQuestion(
            reqBody.textOfQuestion,
            reqBody.firstAnswer,
            reqBody.corrFirstAnswer,
            reqBody.secAnswer,
            reqBody.corrSecAnswer,
            reqBody.thirdAnswer,
            reqBody.corrThirdAnswer,
            reqBody.fourthAnswer,
            reqBody.corrFourthAnswer,
            reqBody.categ,
            reqBody.extendedAnswer
        );
    }

    async deleteQuestion(id) {
        return await this.questionRepository.deleteQuestion(id);
    }

    static build() {
        return new QuestionService(questionRepository);
    }
}
