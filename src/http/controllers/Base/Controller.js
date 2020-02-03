import ResponseHelper from '../../../utils/core/Response';

class Controller {
  // cUser = null;

  filterFields(input, fields, addition) {
    let newInput = {};
    fields.forEach((field) => {
      if (typeof field === 'object') {
        if (field.noEmptyString && input[field.name]) {
          newInput[field.name] = input[field.name];
        }
      } else if (input[field] !== undefined) {
        newInput[field] = input[field];
      }
    });

    if (addition) {
      newInput = Object.assign(newInput, addition);
    }

    return newInput;
  }

  callMethod(method) {
    return async (req, res, next) => {
      try {
        // this.cUser = req.session.cUser;
        return await this[method](req, res, next);
      } catch (e) {
        console.log(e.message, e.stack);
        if (req.headers['content-type'] === 'application/json' ||
          req.headers['x-requested-with'] === 'XMLHttpRequest') {
          return res.json(ResponseHelper.findByCode(e.code));
        }

        return next(e);
      }
    };
  }

}

Object.assign(Controller.prototype, ResponseHelper);

export default Controller;