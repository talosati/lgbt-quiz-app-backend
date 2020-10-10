export default class ValidationError extends Error {
    constructor(message, httpStatusCode) {
        super(message);
        this.httpStatusCode = httpStatusCode;
    }
}
