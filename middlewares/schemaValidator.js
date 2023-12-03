import { INVALID_SCHEMA_STATUS_CODE } from "../statusCodes.js";
import { failureMsg } from "../constants.js";

export const validateSchema = (joiObject) => {
  return (req, res, next) => {
    const { error } = joiObject.validate(req.body);
console.log(error);
    if (error) {
      res.status(INVALID_SCHEMA_STATUS_CODE).send({
        status: failureMsg,
        msg: error.details[0].message,
      });
    } else {
      next();
    }

  };
};
