import Question from '../models/question.js';

export default {
    async getAllQuestions() {
        return (await Question).find({});
    },
    async getAllModeratedQuestions() {
        return (await Question).find({
            isModerated: true
        });
    },
    async getAllUnModeratedQuestions() {
        return (await Question).find({
            isModerated: false
        });
    },

    async createNewQuestion(textOfQuestion, firstAnswer, corrFirstAnswer,
                            secAnswer, corrSecAnswer, thirdAnswer, corrThirdAnswer,
                            fourthAnswer, corrFourthAnswer, categ, story) {
        const question = new (await Question)({
            description: textOfQuestion,
            alternatives: [
                {
                    text: firstAnswer,
                    isCorrect: corrFirstAnswer
                },
                {
                    text: secAnswer,
                    isCorrect: corrSecAnswer
                },
                {
                    text: thirdAnswer,
                    isCorrect: corrThirdAnswer
                },
                {
                    text: fourthAnswer,
                    isCorrect: corrFourthAnswer
                }
            ],
            category: categ,
            extendedAnswer: story
        });
        return await question.save();
    },

    async deleteQuestion(id) {
        return (await Question).findOneAndRemove(id);
    }
}
