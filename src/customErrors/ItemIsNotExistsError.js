import ValidationError from './ValidationError.js';

export default class ItemDoesNotExistError extends ValidationError {
    constructor() {
        super('Searched item does not exist', 404);
    }
}
