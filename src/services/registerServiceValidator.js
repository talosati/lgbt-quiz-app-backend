import PropertyRequiredError from '../customErrors/PropertyRequiredError.js';
import PropertyLengthError from '../customErrors/PropertyLengthError.js';
import PropertyIsIncorrectError from '../customErrors/PropertyIsIncorrectError.js';

export default function validateRequestBody(reqBody) {
    if (!reqBody.username && !reqBody.password && !reqBody.email) {
        throw new PropertyRequiredError('Username, password and email are');
    } else if (!reqBody.username && !reqBody.password) {
        throw new PropertyRequiredError('Username and password are');
    } else if (!reqBody.username && !reqBody.email) {
        throw new PropertyRequiredError('Username and email are');
    } else if (!reqBody.password && !reqBody.email) {
        throw new PropertyRequiredError('Password and email are');
    } else if (!reqBody.username) {
        throw new PropertyRequiredError('Username is');
    } else if (!reqBody.password) {
        throw new PropertyRequiredError('Password is');
    } else if (!reqBody.email) {
        throw new PropertyRequiredError('Email is');
    } else if (!isValidEmail(reqBody.email)) {
        throw new PropertyIsIncorrectError('Email');
    } else if (reqBody.password.length < 8) {
        throw new PropertyLengthError(['Password', 'minimum 8']);
    } else if (reqBody.username.length > 20) {
        throw new PropertyLengthError(['Username', 'maximum 20']);
    } else if (!hasNumber(reqBody.password) || !hasSymbols(reqBody.password)) {
        throw new PropertyIsIncorrectError('Password');
    }
}

function isValidEmail(myString) {
    return /[@]/u.test(myString);
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

function hasSymbols(myString) {
    return /\W/.test(myString);
}
