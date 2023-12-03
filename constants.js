import dotenv from 'dotenv';
dotenv.config();
export const minSuperAdminPassLength = 5;

export const failureMsg = "Failure";
export const successMsg = "Success";

export const passwordHashingRounds = 12;

export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

export const jwtTokenExpirationDuration = {
    superAdmin: 43200
};
