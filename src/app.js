import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import ApiError from './utils/apiError.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Welcome
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Express + Prisma + Supabase Starter' });
});

// Routes
app.use('/api/users', userRoutes);

// 404 Handler → lempar ke global error handler
app.use((req, res, next) => {
    next(new ApiError(404, 'Route not found'));
});

// Global Error Handler (MODERN)
app.use((err, req, res, next) => {
    console.error("🔥 Error:", err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV !== "production" && { stack: err.stack })
    });
});

export default app;
