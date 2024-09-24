import { config } from "dotenv";
config();
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './src/Router/index.js';
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Use the router for your API routes
app.use("/api", router); // Mount the router at "/api/v1"

// Routes
app.use("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        status: err.statusCode || 500,
        error: err.error || true,
        from: err.from || 'Unknown Source',
        message: err.message || 'Internal Server Error',
        data: err.data || null,
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

