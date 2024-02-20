import { MongoClient} from 'mongodb';

const uri = 'mongodb://localhost:27017/heritageItinerants';

async function connectToDatabase() {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connesso a MongoDB');
        return client.db();
    } catch (error) {
        console.error('Errore durante la connessione a MongoDB:', error);
        throw error;
    }
}


export {connectToDatabase}