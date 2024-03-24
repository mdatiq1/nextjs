import mongoose from "mongoose";

// Define the user schema
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,

    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },

    role: {
        type: String
    },
    profile:{
        type:String
    }
});

// Check if the model already exists and create it if not
const User = mongoose.models.Players || mongoose.model("Players", playerSchema);

export default User;
