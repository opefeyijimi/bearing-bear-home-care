import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { intakeSchema } from "@/components/schemas/intakeSchema";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      turnstileToken,
      ...formData
    } = body;

    // --------------------------------------------------
    // 1. Check that Turnstile token exists
    // --------------------------------------------------

    if (
      typeof turnstileToken !== "string" ||
      !turnstileToken
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Security verification is required.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 2. Check secret key
    // --------------------------------------------------

    const secret =
      process.env.TURNSTILE_SECRET_KEY;

    if (!secret) {
      console.error(
        "TURNSTILE_SECRET_KEY is not configured."
      );

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // 3. Verify token with Cloudflare
    // --------------------------------------------------

    const verificationResponse = await fetch(
      TURNSTILE_VERIFY_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret,
          response: turnstileToken,
        }),
      }
    );

    const verification =
      await verificationResponse.json();

    if (!verification.success) {
      console.error(
        "Turnstile verification failed:",
        verification
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Security verification failed. Please try again.",
        },
        { status: 403 }
      );
    }

    // --------------------------------------------------
    // 4. Validate form data with Zod
    // --------------------------------------------------

    const validation =
      intakeSchema.safeParse(formData);

    if (!validation.success) {
      console.error(
        "Intake validation failed:",
        validation.error.flatten()
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Please correct the errors in the application.",
          errors: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const validatedData = validation.data;

    // --------------------------------------------------
    // 5. Save application to Firestore
    // --------------------------------------------------

    const applicationRef = await db
      .collection("intakeApplications")
      .add({
        ...validatedData,

        status: "new",

        source: "website",

        submittedAt: new Date(),
      });

    console.log(
      "Intake application saved:",
      applicationRef.id
    );

    // --------------------------------------------------
    // 6. Return success
    // --------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "Application received successfully.",
        applicationId:
          applicationRef.id,
      },
      { status: 201 }
    );

  } catch (error) {

    console.error(
      "Intake API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}