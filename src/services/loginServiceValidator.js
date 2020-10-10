import PropertyRequiredError from '../customErrors/PropertyRequiredError.js';

export default function validateRequestBody(reqBody) {
    if (!reqBody.username && !reqBody.password) {
        throw new PropertyRequiredError('All fields are');
    } else if (!reqBody.username) {
        throw new PropertyRequiredError('Username is');
    } else if (!reqBody.password) {
        throw new PropertyRequiredError('Password is');
    }
}
