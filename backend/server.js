import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./db/index.js";
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";

// Load environment variables
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// CORS configuration
app.use(
  cors({
    origin: "http://192.168.29.117:3000", // Ensure this is the correct IP address
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Routes
app.use("/api/v1/test", testRouter);
app.use("/api/v1/auth", authRouter);

// Error handling (optional but useful)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Define port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(
    `⚙️  Server is running in ${
      process.env.DEV_MODE || "development"
    } mode at port: ${PORT}`
  );
});
