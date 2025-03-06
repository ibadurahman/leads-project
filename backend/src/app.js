import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import leadsRouter from "./routes/leads.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env") });
const app = express();

/**
 *
 */
app.use(cors());

/**
 * Log HTTP requests
 */
app.use(morgan("common"));

/**
 * Parse incoming requests with JSON payloads
 */
app.use(express.json());

/**
 * Register the leads router
 */
app.use("/leads", leadsRouter);

app.get("/*", (req, res) => {
  res.send("Welcome to the Leads API");
});

export default app;
