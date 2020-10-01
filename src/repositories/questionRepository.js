import mongoose from 'mongoose';
import Question from '../models/question.js';
// const {Question} = 'mongoose'

export default {
    async getAllQuestions() {
        return (await Question).find({});
    }
}
