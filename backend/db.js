const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mahisahu200:tomandjerry123@cluster0.73q0e99.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
            try {
                await mongoose.connect(mongoURI);
                console.log('Connected to MongoDB');

                const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
                console.log();
                
            } catch (error) {
                console.error('Error connecting to MongoDB:', error);
            } 
        };


module.exports = mongoDB;