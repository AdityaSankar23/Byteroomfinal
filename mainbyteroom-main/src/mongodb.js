const mongoose = require("mongoose");

const databaseURL = 'mongodb+srv://byteroom:byteroom%40123@byteroom.ngdil5u.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(databaseURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
    keepAlive:true,
}).then(() => {
     console. log (`connection successful`);
}).catch((e) => {
     console.log(`no connection`);
     console.log(e);
})