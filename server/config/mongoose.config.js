const mongoose = require('mongoose'); // Import mongoose

const dbName = 'Vesta'; // Name database

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, { // Connect to database
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Established connection to database ${dbName}`)
    })
    .catch((error) => {
        console.log("Hmm something went wrong", error)
    })