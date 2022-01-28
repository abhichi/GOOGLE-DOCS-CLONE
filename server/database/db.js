import mongoose from "mongoose";

const Connection = async (username = 'user', password = 'abhi1234') => {
    const URL = `mongodb://${username}:${password}@google-docs-clone-shard-00-00.mltzg.mongodb.net:27017,google-docs-clone-shard-00-01.mltzg.mongodb.net:27017,google-docs-clone-shard-00-02.mltzg.mongodb.net:27017/GOOGLE-DOCS-CLONE?ssl=true&replicaSet=atlas-nps136-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Databse Connected successfully');
    } catch (error) {
        console.log('Error while connecting with DB', error);
    }

}

export default Connection;