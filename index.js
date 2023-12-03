// Dotenv Config
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Imports
import express from "express";

// Route Imports
import superAdminRoutes from "./routes/superAdmin.js";

// Constants
const app = express();
const PORT = process.env.PORT || 3000;

// Express Config Setting
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/superadmin", superAdminRoutes);

app.listen(PORT, () => {
    console.log(`Server Listening at http://localhost:${PORT}`);
});
