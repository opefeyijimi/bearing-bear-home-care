import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin-auth";
import { db } from "@/lib/firebase-admin";

export async function GET(request: Request) {
  try {
    // --------------------------------------------------
    // 1. Get Firebase ID token
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
    // 2. Verify administrator authentication
    // --------------------------------------------------

    const decodedToken =
      await adminAuth.verifyIdToken(idToken);

    // --------------------------------------------------
    // 3. Retrieve applications
    // --------------------------------------------------

    const snapshot = await db
      .collection("intakeApplications")
      .orderBy("submittedAt", "desc")
      .get();

    // --------------------------------------------------
    // 4. Return only summary information
    // --------------------------------------------------

    const applications = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,

        clientName: data.clientName ?? "",
        age: data.age ?? "",
        phone: data.phone ?? "",
        email: data.email ?? "",

        emergencyName:
          data.emergencyName ?? "",

        status: data.status ?? "new",

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