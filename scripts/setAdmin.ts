import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

import {
  cert,
  getApps,
  initializeApp,
} from "firebase-admin/app";

import {
  getAuth,
} from "firebase-admin/auth";


const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert({
          projectId:
            process.env.FIREBASE_PROJECT_ID,

          clientEmail:
            process.env.FIREBASE_CLIENT_EMAIL,

           privateKey:
  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
      });


const adminAuth =
  getAuth(app);


async function makeAdmin() {

  const email =
    process.argv[2];

  if (!email) {

    console.error(
      "Please provide an email address."
    );

    process.exit(1);
  }


  console.log(
    `Looking up Firebase user: ${email}`
  );


  const user =
    await adminAuth.getUserByEmail(
      email
    );


  await adminAuth.setCustomUserClaims(
    user.uid,
    {
      admin: true,
    }
  );


  console.log(
    `Admin role assigned to ${email}`
  );


  console.log(
    "Sign out and sign in again for the new claim to appear in the ID token."
  );
}


makeAdmin().catch((error) => {

  console.error(
    "Unable to assign admin role:"
  );

  console.error(error);

  process.exit(1);

});