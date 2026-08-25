import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";


export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken || typeof idToken !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication token is required.",
        },
        { status: 400 }
      );
    }

    const decodedToken = await adminAuth.verifyIdToken(idToken);

    return NextResponse.json({
      success: true,
      uid: decodedToken.uid,
      email: decodedToken.email,
    });
  } catch (error) {
    console.error("Admin session verification error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Authentication failed.",
      },
      { status: 401 }
    );
  }
}