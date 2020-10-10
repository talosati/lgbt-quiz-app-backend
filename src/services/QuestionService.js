import questionRepository from '../repositories/questionRepository.js';
import ItemDoesNotExistError from '../customErrors/ItemIsNotExistsError.js';

export default class QuestionService {
    constructor(questionRepo) {
        this.questionRepository = questionRepo;
    }

    async getAllQuestions() {
        const foundQuestion = await this.questionRepository.getAllQuestions();
        if (!foundQuestion.length) {
            throw new ItemDoesNotExistError();
        }
        return foundQuestion;
    }

    async getAllModeratedQuestions() {
        const foundQuestion = await this.questionRepository.getAllModeratedQuestions();
        if (!foundQuestion.length) {
            throw new ItemDoesNotExistError();
        }
        return foundQuestion;
    }

    async getAllUnModeratedQuestions() {
        const foundQuestion = await this.questionRepository.getAllUnModeratedQuestions();
        if (!foundQuestion.length) {
            throw new ItemDoesNotExistError();
        }
        return foundQuestion;
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
        const foundQuestion = await this.questionRepository.deleteQuestion(id);
        if (!foundQuestion.length) {
            throw new ItemDoesNotExistError();
        }
        return foundQuestion;
    }

    static build() {
        return new QuestionService(questionRepository);
    }
}
