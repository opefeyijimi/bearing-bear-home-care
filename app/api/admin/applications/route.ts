import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { db } from "@/lib/firebase-admin";

export async function GET(request: Request) {
  try {
    // --------------------------------------------------
    // 1. Get Firebase ID token from Authorization header
    // --------------------------------------------------

    const authorization =
      request.headers.get("Authorization");

    if (!authorization?.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication required.",
        },
        { status: 401 }
      );
    }

    const idToken = authorization.substring(7);

    // --------------------------------------------------
    // 2. Verify token with Firebase Admin
    // --------------------------------------------------

    const decodedToken =
      await adminAuth.verifyIdToken(idToken);

    // --------------------------------------------------
    // 3. Get intake applications
    // --------------------------------------------------

    const snapshot = await db
      .collection("intakeApplications")
      .orderBy("submittedAt", "desc")
      .get();

    const applications = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        ...data,

        submittedAt:
          data.submittedAt?.toDate?.()?.toISOString() ??
          null,
      };
    });

    return NextResponse.json({
      success: true,
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email,
      },
      applications,
    });

  } catch (error) {
    console.error(
      "Admin applications API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to retrieve applications.",
      },
      { status: 401 }
    );
  }
}