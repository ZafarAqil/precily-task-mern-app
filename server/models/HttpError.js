/**
 * Datamodel for HttpErrors
 * @property {number} errorCode normal http error code (eg. 400, 500, etc) 
 * @property {object} errorObject detailed error object
 * @property {boolean} errorObject.success false (fixed) for errors
 * @property {object} errorObject.error error which occurred
 * @property {string} errorObject.error.message error message for front-end
 * @property {string} errorObject.error.code error code for front-end
 */
class HttpError extends Error {
    /**
     * @method
     * @param {string} message error message for the error 
     * @param {number=} httpErrorCode normal http error code (eg. 400, 500, etc)
     * @param {string=} customErrorCode custom error code (like AU-401)
     */
    constructor(message, httpErrorCode, customErrorCode) {
        super(message);
        this.errorCode = httpErrorCode;
        this.errorObject = {
            success: false,
            error: {
                message: message || "An unknown error has occurred.",
                code: customErrorCode || "UNEXPECTED_SEVER_ERROR"
            }
        };
    }
}

module.exports = HttpError;