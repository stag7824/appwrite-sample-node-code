# Appwrite Sample NodeJS code: Appwrite Integration Test Project

This project demonstrates how to integrate and test Appwrite backend services in a Node.js application. It provides a simple implementation of CRUD operations using the Appwrite SDK.

## Overview

Appwrite Sample NodeJS code is a minimal testing environment designed to validate your Appwrite configuration and experiment with core Appwrite features including:

- Document creation in collections
- Reading document lists and individual documents
- Updating documents
- Deleting documents (commented out by default)

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- An Appwrite instance (cloud or self-hosted)
- Appwrite project with database and collection configured

## Setup

1. Clone this repository:
   ```
   git clone <your-repo-url>
   cd Appwrite Sample NodeJS code
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your environment variables:
   - Create a `.env` file in the root directory if it doesn't exist already
   - Add your Appwrite API key:
     ```
     APP_WRITE=your_appwrite_api_key
     ```

4. Update the Appwrite configuration in `appwrite.js` if needed:
   - Endpoint URL
   - Project ID

5. Update the database and collection IDs in `testAppwrite.js`

## Project Structure

- `package.json` - Project configuration and dependencies
- `appwrite.js` - Appwrite client initialization and configuration
- `testAppwrite.js` - Sample CRUD operations with Appwrite
- `.env` - Environment variables (API keys)

## Usage

Run the test script to verify your Appwrite setup:

```
npm run test
```

This will execute the sample CRUD operations defined in `testAppwrite.js`.

## Features

- Server-side API authentication
- Document creation
- Document listing
- Document retrieval
- Document updates
- Document deletion (commented out by default)

## Technologies Used

- Node.js
- Appwrite Backend-as-a-Service
- node-appwrite SDK
- dotenv for environment variable management

## Next Steps

This project serves as a starting point. You can expand it by:

1. Adding a frontend interface
2. Implementing user authentication
3. Adding more complex queries
4. Integrating with Appwrite Storage, Functions, or other services

## License

ISC
