import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,    
    },
    email: {
        type: String,
      
    },
    age:{
        type:Number
    }
});

// Check if the model already exists and create it if not
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
