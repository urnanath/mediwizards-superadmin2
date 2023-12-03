import joi from "joi";
import { minSuperAdminPassLength } from "../constants.js";

export const superAdminSchemaValidatorsCollection = {
  signUp: joi.object({
    email: joi.string().email().required().messages({
      "string.empty": "email cannot be empty",
      "string.email": "Invalid Email Address",
      "any.required": "email is a Required Field",
    }),
    password: joi.string().min(minSuperAdminPassLength).required().messages({
      "string.empty": "password cannot be empty",
      "string.min": "Password too short",
      "any.required": "password is a Required Field",
    }),
    profilePic: joi.string().uri().messages({
      "string.uri": "Enter a Valid Profile Pic URL",
    }),
  }),

  login: joi.object({
    email: joi.string().email().required().messages({
      "string.empty": "email cannot be empty",
      "string.email": "Invalid Email Address",
      "any.required": "email is a Required Field",
    }),
    password: joi.string().min(minSuperAdminPassLength).required().messages({
      "string.empty": "password cannot be empty",
      "string.min": "Password too short",
      "any.required": "password is a Required Field",
    }),
  }),
};
