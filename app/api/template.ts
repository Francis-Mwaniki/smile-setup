// Template: API
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();

    // Validate request body
    if (!data) {
      // return new NextResponse("Invalid request", { status: 400 });
      return NextResponse.json({ message: "Invalid request", 
        status: 400
       });
    }


  
    return NextResponse.json({message: "ok", //response data
},
       {status: 200}
      );
  } catch (error: any) {
    console.error(error);
   
    return NextResponse.json({ message: error.message, 
      status: 500
     });

  }
}