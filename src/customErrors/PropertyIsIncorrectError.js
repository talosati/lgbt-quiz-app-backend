import ValidationError from './ValidationError.js';

export default class PropertyIsIncorrectError extends ValidationError {
    constructor(field) {
        super(`${field} is incorrect.`, 401);
    }
}
