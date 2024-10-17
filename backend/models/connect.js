// // db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected to database successfully!");
//     } catch (error) {
//         console.log("Failed to connect to the database!", error);
//         process.exit(1); 
//     }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sch')
    .then(() => { console.log('Connected') })
    .catch(() => { console.log('Error in Connection') });

