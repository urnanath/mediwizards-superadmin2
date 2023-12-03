import jwt from "jsonwebtoken";
import { accessTokenSecret, jwtTokenExpirationDuration } from "../constants.js";
console.log(accessTokenSecret);

export const getToken = (email,role) => jwt.sign({email},accessTokenSecret,{expiresIn:jwtTokenExpirationDuration[role]})