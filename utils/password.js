import {hash,genSaltSync,compare} from "bcrypt";
import { passwordHashingRounds } from "../constants.js";

export const hashPassword = async (plainTextPassword) => await (hash(plainTextPassword,genSaltSync(passwordHashingRounds)));

export const AreSamePasswords = async (plainTextPassword,hashedPassword) =>
    await compare(
        plainTextPassword,
        hashedPassword
    );