import { Client, Databases, Account } from "node-appwrite";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const client = new Client();

client
  .setEndpoint("https://appwrite.stagify.tech/v1")
  .setProject("67d9136600269eea8cbd")
  .setKey(process.env.APP_WRITE);

// Exporting the client and services for use in other files
export const databases = new Databases(client);
export const account = new Account(client);
export default client;
