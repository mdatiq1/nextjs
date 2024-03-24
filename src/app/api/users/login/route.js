import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";



connect()


export async function POST(request) {
    try {
        const requestBody = await request.json();

        // Check if username and email are provided
        if (!requestBody.name || !requestBody.email) {
            return NextResponse.json({ error: "Please provide both username and email" });
        }

        const { name, email, age } = requestBody;
        console.log(requestBody)

        // Check if username meets validation criteria
        if (name.length < 3) {
            return NextResponse.json({ error: "Username must be at least 3 characters long" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" });
        }

        const userData = new User({
            name,
            email,
            age
        });
        console.log(`instancew`, userData)

        const saved = await userData.save();
        console.log(saved);

        return NextResponse.json({ message: "Saved Successfully", status: 201, saved });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

export async function GET(request) {
    try {
   
        const user = await User.find();
        if (user) {
            return NextResponse.json({ message: "User Fetched",  user });
        } else {
            return NextResponse.json({ message: "No User Found", user });

        }
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
