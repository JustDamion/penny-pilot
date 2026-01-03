import { drizzle } from 'drizzle-orm/node-postgres'

export function getEnvValue(envVar: string): string {
  const value = process.env[envVar];
  if (!value) {
    throw new Error(`ERROR: Missing require environment variable: ${envVar}`);
  }

  return value;
}

export const db = drizzle(getEnvValue(getEnvValue('DB_CONNECTION_STRING')));