import Question from '../models/question.js';

export default {
    async getAllQuestions() {
        return (await Question).find({});
    }
}
