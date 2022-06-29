let mongoose = require('mongoose');

//Create db connection. If test db is there it will connect to that else it will be newly created
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser:true, useUnifiedTopology:true} )
.then( ()=> console.log("Connected"))
.catch((err) => console.log(err));

// Define schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    mob:Number,
    active:Boolean
    // date:{
    //     type:date,
    //     default:Date.now
    // }
})

// collection creation( It will create new collection)
//Note: Here User is case sensitive(always use camel case/firstletter capital) and singular but in db it will be plural automatically
//Giving the name as capital starting also called as pascal convention
//const User here works as a class so its also written in camel case
const User = new mongoose.model("User", userSchema);

const createuser = async()=>{
    try{
        const userDetails = new User({
            name:"JKL",
            age:96,
            mob:5260002589,
            active:true
        })

        const result = await userDetails.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createuser()





