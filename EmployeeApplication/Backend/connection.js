const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://karunyaachi007:aachi123@cluster0.xtmbu.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")

.then(() => {
    console.log("Connected to MongoDB")
})
    .catch((err) => {
    console.log(err);
})