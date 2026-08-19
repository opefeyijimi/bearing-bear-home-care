import { z } from "zod";

export const intakeSchema = z.object({


    // ==========================================
  // CLIENT INFORMATION
  // ==========================================

  clientName: z
    .string()
    .trim()
    .min(2, "Please enter the client's full name"),

  dateOfBirth: z
    .string()
    .min(1, "Please enter the client's date of birth"),

  phone: z
    .string()
    .trim()
    .regex(
      /^\+?[1-9]\d{7,14}$/,
      "Please enter a valid phone number with country code"
    ),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  address: z
    .string()
    .trim()
    .min(5, "Please enter the client's home address"),

  language: z
    .string()
    .min(1, "Please select a preferred language"),

  maritalStatus: z
    .string()
    .optional(),

  // ==========================================
  // EMERGENCY CONTACT
  // ==========================================

  //emergencyName: z.string().optional(),
  emergencyName: z
  .string()
  .min(2, "Emergency contact name is required"),
  
  emergencyRelationship: z
  .string()
  .min(2, "Relationship is required"),

  //emergencyRelationship: z.string().optional(),
  emergencyPhone: z
  .string()
  .min(8, "A valid phone number is required"),
  
  //emergencyPhone: z.string().optional(),

  emergencyEmail: z
    .string()
    .email("Please enter a valid emergency contact email")
    .optional()
    .or(z.literal("")),

  emergencyAddress: z.string().optional(),

  secondaryEmergencyName: z.string().optional(),
  secondaryEmergencyRelationship: z.string().optional(),
  secondaryEmergencyPhone: z.string().optional(),

  secondaryEmergencyEmail: z
    .string()
    .email("Please enter a valid secondary emergency contact email")
    .optional()
    .or(z.literal("")),


/*
  clientName: z.string().min(2, "Full name is required"),
  dateOfBirth: z.string(),
  phone: z.string().min(8),
  email: z.string().email(),

  address: z.string().optional(),
  language: z.string().optional(),
  maritalStatus: z.string().optional(),

  emergencyName: z.string().optional(),
  emergencyRelationship: z.string().optional(),
  emergencyPhone: z.string().optional(),


emergencyEmail: z.string().email().optional().or(z.literal("")),

emergencyAddress: z.string().optional(),

secondaryEmergencyName: z.string().optional(),
secondaryEmergencyRelationship: z.string().optional(),
secondaryEmergencyPhone: z.string().optional(),
secondaryEmergencyEmail: z.string().email().optional().or(z.literal("")),

*/

physicianName: z.string().optional(),
physicianPhone: z.string().optional(),

preferredHospital: z.string().optional(),

insuranceProvider: z.string().optional(),
policyNumber: z.string().optional(),


medicalConditions: z.string().optional(),
allergies: z.string().optional(),
medications: z.string().optional(),

mobility: z.string().optional(),
falls: z.string().optional(),

vision: z.string().optional(),
hearing: z.string().optional(),

memory: z.string().optional(),
orientation: z.string().optional(),

hospitalizations: z.string().optional(),

diet: z.string().optional(),

medicalNotes: z.string().optional(),

adlBathing: z.boolean().optional(),
adlDressing: z.boolean().optional(),
adlGrooming: z.boolean().optional(),
adlToileting: z.boolean().optional(),
adlEating: z.boolean().optional(),
adlMobility: z.boolean().optional(),
adlTransfers: z.boolean().optional(),

iadlMeals: z.boolean().optional(),
iadlMedication: z.boolean().optional(),
iadlLaundry: z.boolean().optional(),
iadlHousekeeping: z.boolean().optional(),
iadlShopping: z.boolean().optional(),
iadlTransportation: z.boolean().optional(),
iadlCompanionship: z.boolean().optional(),

dailyLivingNotes: z.string().optional(),

preferredGender: z.string().optional(),
preferredLanguage: z.string().optional(),

hobbies: z.string().optional(),

pets: z.string().optional(),
smoking: z.string().optional(),

preferredDays: z.string().optional(),
preferredTime: z.string().optional(),

religiousNeeds: z.string().optional(),

preferencesNotes: z.string().optional(),

livingArrangement: z.string().optional(),
homeType: z.string().optional(),

hasStairs: z.boolean().optional(),
hasRamp: z.boolean().optional(),
hasElevator: z.boolean().optional(),
accessibleBathroom: z.boolean().optional(),

grabBars: z.boolean().optional(),
showerChair: z.boolean().optional(),
hospitalBed: z.boolean().optional(),
emergencyAlert: z.boolean().optional(),

mobilityAids: z.string().optional(),

homeSafetyConcerns: z.string().optional(),

homeNotes: z.string().optional(),



responsibleParty: z.string().optional(),
responsibleRelationship: z.string().optional(),

billingAddress: z.string().optional(),

serviceStartDate: z.string().optional(),
serviceSchedule: z.string().optional(),

paymentMethod: z.string().optional(),

billingFrequency: z.string().optional(),
billingContactMethod: z.string().optional(),

billingNotes: z.string().optional(),



informationAccurate: z.boolean().refine(
  (value) => value === true,
  "Please confirm that the information provided is accurate."
),

privacyConsent: z.boolean().refine(
  (value) => value === true,
  "Please acknowledge the privacy and information-use statement."
),

serviceConsent: z.boolean().refine(
  (value) => value === true,
  "Please acknowledge the companion care services statement."
),

electronicCommunication: z.boolean().optional(),

signatureName: z.string().min(
  2,
  "Please enter your name."
),

relationshipToClient: z.string().min(
  1,
  "Please select your relationship to the client."
),

signatureDate: z.string().min(
  1,
  "Please provide the signature date."
),

finalAgreement: z.boolean().refine(
  (value) => value === true,
  "Please confirm the final agreement before submitting."
),

});

export type IntakeFormValues = z.infer<typeof intakeSchema>;













