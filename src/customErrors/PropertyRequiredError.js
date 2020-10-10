import ValidationError from './ValidationError.js';

export default class PropertyRequiredError extends ValidationError {
    constructor(field) {
        super(`${field} required`, 400);
    }
}
