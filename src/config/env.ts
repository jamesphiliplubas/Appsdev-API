import dotenv from 'dotenv';

dotenv.config();

export const env = {
  appName: process.env.APP_NAME || 'AppsDev API Tutorial',
  port: Number(process.env.PORT) || 7000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'fallback_secret_change_me',
  backendUrl: process.env.BACKEND_URL || 'http://localhost:7000',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  databaseUrl: process.env.DATABASE_URL || '',
};