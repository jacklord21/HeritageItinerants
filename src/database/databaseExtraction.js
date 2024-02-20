import {connectToDatabase} from './databaseConnection';

async function handler() {
    try {
        const db = await connectToDatabase();
        // Perform database operations here
        console.log("Hello from the /api/posts endpoint!: " + db);
        return db;
    } catch (error) {
        console.log("Error ON FETCHING.");
    }
}

export default handler;