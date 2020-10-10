import ValidationError from './ValidationError.js';

export default class PropertyAlreadyExistsError extends ValidationError {
    constructor(field) {
        super(`${field} is already taken.`, 409);
    }
}
