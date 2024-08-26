import { NextResponse } from "next/server";
export async function GET(request){
   // return new Response("Hello API User Data")

   return NextResponse.json({name:'Rajeev',Mobile:'8882099400'},{status:202})
}