import { connect } from "@/dbconfig/dbConfig";
import playerSchema from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";



connect()


export async function POST(request) {
    try {
        const requestBody = await request.json();


        const { name, email, phone, address, role, profile } = requestBody;
        console.log(requestBody)
        
        // Check if username meets validation criteria
        if (name.length < 3) {
            return NextResponse.json({ error: "Username must be at least 3 characters long" });
        }

        const user = await playerSchema.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" });
        }

        const requestData = new playerSchema({
            name, email, phone, address, role, profile
        });


        const saved = await requestData.save();
        console.log(saved);

        return NextResponse.json({ message: "Saved Successfully", status: 201, saved });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

export async function GET(request) {
    try {

        const user = await playerSchema.find();
        if (user) {
            return NextResponse.json({ message: "User Fetched", user });
        } else {
            return NextResponse.json({ message: "No User Found", user });

        }
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
