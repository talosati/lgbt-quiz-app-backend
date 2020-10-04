import mongoose from 'mongoose';

async function Question() {
    const questionSchema = new mongoose.Schema({
        description: String,
        alternatives: [
            {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true,
                    default: false
                }
            },
            {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true,
                    default: false
                }
            },
            {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true,
                    default: false
                }
            },
            {
                text: {
                    type: String,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true,
                    default: false
                }
            }
        ],
        category: {
            type: String,
            required: true
        },
        point: {
            type: Number,
            required: true,
            default: 1
        },
        isModerated: {
            type: Boolean,
            required: true,
            default: false
        },
        moderatedBy: {
            type: String,
            required: true,
            default: 'nobody'
        },
        extendedAnswer: {
            type: String,
            required: true
        }
    })
    const Question = mongoose.model('Question', questionSchema);
    try {
        await Question.createCollection();
    } catch (error) {
        console.log(error.message);
    }
    return Question;
}

export default Question();

