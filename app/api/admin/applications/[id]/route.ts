import { NextResponse } from "next/server";
import { adminAuth, db } from "@/lib/firebase-admin";

async function authenticateAdmin(request: Request) {
  const authorization =
    request.headers.get("Authorization");

  if (!authorization?.startsWith("Bearer ")) {
    throw new Error("Authentication required.");
  }

  const idToken = authorization.substring(7);

  return await adminAuth.verifyIdToken(idToken);
}


// ======================================================
// GET — Retrieve one application
// ======================================================

export async function GET(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await authenticateAdmin(request);

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Application ID is required.",
        },
        { status: 400 }
      );
    }

    const document = await db
      .collection("intakeApplications")
      .doc(id)
      .get();

    if (!document.exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Application not found.",
        },
        { status: 404 }
      );
    }

    const data = document.data();

    return NextResponse.json({
      success: true,

      application: {
        id: document.id,
        ...data,

        submittedAt:
          data?.submittedAt
            ?.toDate?.()
            ?.toISOString() ?? null,
      },
    });

  } catch (error) {
    console.error(
      "Admin application GET error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Authentication failed.",
      },
      { status: 401 }
    );
  }
}


// ======================================================
// PATCH — Update application status
// ======================================================

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await authenticateAdmin(request);

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Application ID is required.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const { status } = body;

    // --------------------------------------------------
    // Validate status
    // --------------------------------------------------

    const allowedStatuses = [
      "new",
      "under_review",
      "approved",
      "archived",
    ];

    if (
      typeof status !== "string" ||
      !allowedStatuses.includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid application status.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // Check application exists
    // --------------------------------------------------

    const document = await db
      .collection("intakeApplications")
      .doc(id)
      .get();

    if (!document.exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Application not found.",
        },
        { status: 404 }
      );
    }

    // --------------------------------------------------
    // Update status
    // --------------------------------------------------

    await db
      .collection("intakeApplications")
      .doc(id)
      .update({
        status,
        updatedAt: new Date(),
      });

    return NextResponse.json({
      success: true,
      message: "Application status updated.",
      status,
    });

  } catch (error) {
    console.error(
      "Admin application PATCH error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update application.",
      },
      { status: 500 }
    );
  }
}