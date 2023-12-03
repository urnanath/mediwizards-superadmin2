import { PrismaClient } from "@prisma/client";
import { failureMsg, successMsg } from "../constants.js";
import {
    ALREADY_EXISTS_STATUS_CODE,
    INTERNAL_SERVER_ERROR_STATUS_CODE,
    INVALID_AUTH_CREDENTIALS_STATUS_CODE,
    RESOURCE_CREATION_SUCCESS_STATUS_CODE,
    RESOURCE_DOES_NOT_EXIST_STATUS_CODE,
    SUCCESS_STATUS_CODE
} from "../statusCodes.js";
import { hashPassword, AreSamePasswords } from "../utils/password.js";
import { getToken } from "../utils/jwt.js";

const prisma = new PrismaClient();

export const superAdminSignUp = async (req, res) => {
    const { email, password, profilePic } = req.body;

    const targetSuperAdmin = await prisma.superAdmin.findFirst({
        where: { email }
    });

    if (targetSuperAdmin !== null) {
        res.status(ALREADY_EXISTS_STATUS_CODE).send({
            status: failureMsg,
            msg: "Email already exists! Try Logging In.."
        });
    } else {
        try {
            const hashedPassword = await hashPassword(password);

            const superAdmin = await prisma.superAdmin.create({
                data: { email, password: hashedPassword, profilePic }
            });

            res.status(RESOURCE_CREATION_SUCCESS_STATUS_CODE).send({
                status: successMsg,
                msg: "Superadmin successfully created..",
                superAdminId: superAdmin.superadminId
            });
        } catch (error) {
            console.log(error);
            res.status(INTERNAL_SERVER_ERROR_STATUS_CODE).send({
                status: failureMsg,
                msg: "Internal Server Error"
            });
        }
    }
};

export const superAdminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const targetSuperAdmin = await prisma.superAdmin.findFirst({
            where: { email }
        });

        // Account Does not exist
        if (targetSuperAdmin === null) {
            res.status(RESOURCE_DOES_NOT_EXIST_STATUS_CODE).send({
                status: failureMsg,
                msg: "Account Does not exist!! Try Signing Up.."
            });
        } else {
            const passwordParity = await AreSamePasswords(
                password,
                targetSuperAdmin.password
            );
            // Account Exists but passwords does not match
            if (passwordParity === false) {
                res.status(INVALID_AUTH_CREDENTIALS_STATUS_CODE).send({
                    status: failureMsg,
                    msg: "Invalid Credentials"
                });
            } else {
                const token = getToken(email,"superAdmin");

                res.status(SUCCESS_STATUS_CODE).send({
                    status: successMsg,
                    msg: "Successfully Logged In..",
                    token
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(INTERNAL_SERVER_ERROR_STATUS_CODE).send({
            status: failureMsg,
            msg: "Internal Server Error"
        });
    }
};
