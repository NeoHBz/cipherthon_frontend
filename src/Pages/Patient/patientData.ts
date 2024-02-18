export interface PatientData {
    hospitalName: string;
    accessing: string[];
    disease: string;
    status: string;
    id: number;
}
export const initialTableData: PatientData[] = [
    {
        id: 1,
        hospitalName: "Clinique Hospital",
        accessing: ["basic", "allergies", "lab results", "medication", "vaccination records", "immuniaton records", "sexual history"],
        disease: "Influenza",
        status: "pending",
    },
    {
        id: 2,
        hospitalName: "General Hospital",
        accessing: ["basic", "lab results", "medications", "immunization records", "vaccination records", "family history"],
        disease: "Pneumonia",
        status: "approved",
    },
    {
        id: 3,
        hospitalName: "Unity Health Clinic",
        accessing: ["basic", "family history", "lab results", "medications"],
        disease: "Diabetes",
        status: "pending",
    },
    {
        id: 4,
        hospitalName: "Metropolitan Hospital",
        accessing: ["basic", "lab results", "medications", "family history"],
        disease: "Hypertension",
        status: "approved",
    },
    {
        id: 5,
        hospitalName: "Community Care Hospital",
        accessing: ["basic", "allergies", "family history", "immunization records"],
        disease: "Migraine",
        status: "pending",
    },
    {
        id: 6,
        hospitalName: "Sunset Health Clinic",
        accessing: ["basic", "medications", "allergies" ],
        disease: "Asthma",
        status: "approved",
    },
    {
        id: 7,
        hospitalName: "Ocean View Hospital",
        accessing: ["basic", "family history", "lab results", "medications"],
        disease: "Arthritis",
        status: "approved",
    },
    {
        id: 8,
        hospitalName: "Rosewood Health Center",
        accessing: ["basic", "lab results"],
        disease: "Osteoporosis",
        status: "approved",
    },
    {
        id: 9,
        hospitalName: "Pinecrest Hospital",
        accessing: ["basic", "family history", "lab results", "medications"],
        disease: "Depression",
        status: "pending",
    },
    {
        id: 10,
        hospitalName: "Westside Wellness Clinic",
        accessing: ["basic", "medications", "family history", "lab results", "sexual history"],
        disease: "Cancer",
        status: "approved",
    },
];