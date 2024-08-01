import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  databaseUrl: process.env.DATABASE_URL,
  port: 5000,
  jwtSecret: 'default_secret',
  logLevel: 'info',
  emailService: 'gmail',
  emailHost: 'smtp.gmail.com',
  emailPort: 587,
  emailUser: '',
  emailPass: '',
  adminEmail: '',
};