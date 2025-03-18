import { databases } from './appwrite.js';
import { ID } from "node-appwrite";

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// NOTE: You'll need to replace these with your actual values
const DATABASE_ID = '67d915230008b7e6de69';
const COLLECTION_ID = '67d915400009e80c9ac0';

async function testAppwrite() {
    try {
        console.log('Using server API key authentication...');
        
        // 1. Create a document
        console.log('Creating a document...');
        const createdDocument = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(), // Generates a unique ID
            {
                title: 'Test Document',
                content: 'This is a test document created via API',
                createdAt: new Date().toISOString()
            }
        );
        console.log('Document created:', createdDocument);

        // 2. Read documents
        console.log('Reading all documents...');
        const documentList = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID
        );
        console.log('Documents:', documentList);

        // 3. Update the document
        console.log('Updating document...');
        const updatedDocument = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            createdDocument.$id,
            {
                title: 'Updated Test Document',
                content: 'This document has been updated via API',
                updatedAt: new Date().toISOString()
            }
        );
        console.log('Document updated:', updatedDocument);

        // 4. Get a single document
        console.log('Getting single document...');
        const singleDocument = await databases.getDocument(
            DATABASE_ID,
            COLLECTION_ID,
            createdDocument.$id
        );
        console.log('Single document:', singleDocument);

        // 5. Delete the document
        console.log('Deleting document...');
        // await databases.deleteDocument(
        //     DATABASE_ID,
        //     COLLECTION_ID,
        //     createdDocument.$id
        // );
        // console.log('Document deleted successfully');

    } catch (error) {
        console.error('Error testing Appwrite:', error);
    }
}

testAppwrite();
