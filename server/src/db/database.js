const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Sksony:SksonyMongo5@cluster0.aq4woat.mongodb.net/todos?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected sucessfully")).catch((err) => console.log(err));