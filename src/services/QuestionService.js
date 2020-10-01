import questionRepository from '../repositories/questionRepository.js';

export default class QuestionService {
    constructor(questionRepo) {
        this.questionRepository = questionRepo;
    }

    async getAllQuestions() {
        return await this.questionRepository.getAllQuestions();
    }

    async createNewQuestion(reqBody) {
        console.log(reqBody);
        return await this.questionRepository.createNewQuestion(reqBody.textOfQuestion,
            reqBody.firstAnswer, reqBody.corrFirstAnswer,
            reqBody.secAnswer, reqBody.corrSecAnswer,
            reqBody.thirdAnswer, reqBody.corrThirdAnswer,
            reqBody.fourthAnswer, reqBody.corrFourthAnswer,
            reqBody.categ);
    }

    static build() {
        return new QuestionService(questionRepository);
    }
}
