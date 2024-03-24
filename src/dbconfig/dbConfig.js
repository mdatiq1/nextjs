import mongoose from "mongoose";


export async function connect(){
    try {
// MONGO_URI=mongodb+srv://atiq:rahman@cluster0.t2nfsf7.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URI)
const connection =mongoose.connection;
connection.on('connected',()=>{
    console.log('connected Successfully')
})

connection.on('error',()=>{
    console.log('error while connecting')
})
        
    } catch (error) {
     console.log(error)   
    }
}