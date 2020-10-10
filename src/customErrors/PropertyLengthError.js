import ValidationError from './ValidationError.js';

export default class PropertyLengthError extends ValidationError {
    constructor(field) {
        super(`${field[0]} must be ${field[1]} characters`, 406);
    }
}
