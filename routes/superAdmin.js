import express from "express";

import {
  superAdminSignUp,
  superAdminLogin,
} from "../controllers/superAdmin.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { superAdminSchemaValidatorsCollection } from "../validators/superAdmin.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from SA");
});
router
  .post(
    "/signup",
    validateSchema(superAdminSchemaValidatorsCollection.signUp),
    superAdminSignUp,
  )
  .post(
    "/login",
    validateSchema(superAdminSchemaValidatorsCollection.login),
    superAdminLogin,
  );

export default router;
