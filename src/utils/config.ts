import dotenv from 'dotenv';
dotenv.config();

export const weatherAPIKey = process.env.weatherAPIKey;
export const PORT = process.env.PORT || 3001;
export const connectionUri = process.env.MONGODB_URI;