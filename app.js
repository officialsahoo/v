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


//For inserting single user
// const createuser = async()=>{
//     try{
//         const userDetails = new User({
//             name:"JKL",
//             age:96,
//             mob:5260002589,
//             active:true
//         })

//         const result = await userDetails.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }
//For inserting single user


// For inserting multiple user
const createuser = async()=>{
    try{
        const user1 = new User({
            name:"MNO",
            age:36,
            mob:8596201254,
            active:true
        })
        const user2 = new User({
            name:"PQR",
            age:20,
            mob:9856320214,
            active:true
        })
        const user3 = new User({
            name:"STU",
            age:99,
            mob:8952021478,
            active:true
        })
        const user4 = new User({
            name:"VWX",
            age:88,
            mob:2562369856,
            active:true
        })

        const result = await User.insertMany([user1,user2,user3,user4]);
        console.log(result);
    } catch(err){
        console.log(err);
    }
}
// For inserting multiple user

createuser()





