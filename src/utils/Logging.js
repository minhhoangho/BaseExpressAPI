import winston from './Winston';
import { commonErrors } from './ErrorCodes';

const jsonSuccess = (result = null) => {
    return { success: true, result };
  };
  
const jsonError = (err = null) => {
    return { success: false, error: err };
};

const logger = {
    verbose: (message, addition = '') => {
        return winston.verbose(message, addition);
    },
    warn: message => {
        return winston.warn(message);
    },
    error: (message, error) => {
        return winston.error(`${message}::${error}`);
    },
    info: (message, error) => {
        return winston.info(`${message}::${error}`);
    }
};
  
/**
 * Exception handler in catch controller
 * @param {Object} res response
 * @param {any} error error
 */
const handleExceptionResponse = (res, errName, err) => {
  // Logger
  logger.error(`${new Date().toDateString()}_${errName}`, err);

  if (err.original && err.original.code === 'ER_DUP_ENTRY') {
    return res.json(jsonError(commonErrors.DUPLICATED_ERROR));
  }

  return res.json(jsonError(commonErrors.SYSTEM_ERROR));
};
  
export { jsonSuccess, jsonError, logger, handleExceptionResponse };