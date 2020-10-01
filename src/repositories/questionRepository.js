import Question from '../models/question.js';

export default {
    async getAllQuestions() {
        return (await Question).find({});
    },
    async createNewQuestion(textOfQuestion, firstAnswer, corrFirstAnswer,
                            secAnswer, corrSecAnswer, thirdAnswer, corrThirdAnswer,
                            fourthAnswer, corrFourthAnswer, categ) {
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
            category: categ
        });
        return await question.save();
    }
}
