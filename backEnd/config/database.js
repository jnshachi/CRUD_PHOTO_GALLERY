const mongoose=require("mongoose");


//to provide the connection uri
const DB_URI="mongodb+srv://praveen:praveen@cluster0.qymdl.mongodb.net/photoGallery?retryWrites=true&w=majority";
//connect function
const connectDb=()=>{
    mongoose.connect(DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((data)=>{
    console.log(`mongo db connected ${data.connection.host}`);
}).catch((err)=>{
console.log(err);
})
}



//exportion so that it can be used in server.js
module.exports=connectDb