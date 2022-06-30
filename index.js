const { MongoClient } = require('mongodb');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
// Connection URL
const url = 'mongodb+srv://Kelvin:backend_007@cluster0.xllr0.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'backendkelvin';

app.get('/', async (req, res) => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('tabel');
    const findResult = await collection.find({}).toArray();
    res.status(200).json({ uasjson: findResult })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})