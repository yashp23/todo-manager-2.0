// localhost:3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/app/helper/errorMessage";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userId}=params;

    try {

        //get user using id

        const tasks = await Task.find({
            userId:userId
        })
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error Fetching Particular User Tasks",500,false);
    }
}