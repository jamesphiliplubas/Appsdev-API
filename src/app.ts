import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import { env } from '@/config/env';

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(hpp());

// Root endpoint
// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Welcome to the API',
        timestamp: new Date().toISOString()
    });
});

// Health-check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'API is healthy',
    timestamp: new Date().toISOString()
  });
});

// 404 Catch-all handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

export default app;
