const mongoose = require('mongoose');

const connectDB = async (DATABASE_URL, DATABASE) => {
    try {
        const DB_OPTIONS = {
            dbName: DATABASE
        }

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);

        console.log("Database Connected Successfully..");
    } catch (err) {
        console.log("Database Not connected", err.message);
    }
}
module.exports = connectDB