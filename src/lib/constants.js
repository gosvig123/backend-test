import dotenv from 'dotenv'
dotenv.config()

if (process.env.DATABASE_URL === undefined) {
  throw new Error('DATABASE_URL is not defined');
}
export const DATABASE_URL = process.env.DATABASE_URL;

export const PORT = process.env.PORT || 8080;