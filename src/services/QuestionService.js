import questionRepository from '../repositories/questionRepository.js';
import ItemDoesNotExistError from '../customErrors/ItemDoesNotExistError.js';

export default class QuestionService {
    constructor(questionRepo) {
        this.questionRepository = questionRepo;
    }

    async tryWith(callback) {
        const foundQuestion = await callback(this.questionRepository);
        if (!foundQuestion.length) {
            throw new ItemDoesNotExistError();
        }
        return foundQuestion;
    }

    async getAllQuestions() {
        return this.tryWith(async (repository) => { return await repository.getAllQuestions()});
    }

    async getAllModeratedQuestions() {
        return this.tryWith(async (repository) => { return await repository.getAllModeratedQuestions()});
    }

    async getAllUnModeratedQuestions() {
        return this.tryWith(async (repository) => { return await repository.getAllUnModeratedQuestions()});
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
        await this.tryWith(async (repository) => {return await repository.getQuestionById(id)});
        return this.questionRepository.deleteQuestion(id);
    }

    static build() {
        return new QuestionService(questionRepository);
    }
}
