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
        accessing: ["basic", "allergies", "sexual history"],
        disease: "Influenza",
        status: "pending",
    },
    {
        id: 2,
        hospitalName: "General Hospital",
        accessing: ["basic", "lab results", "medications"],
        disease: "Pneumonia",
        status: "approved",
    },
    {
        id: 3,
        hospitalName: "Unity Health Clinic",
        accessing: ["basic", "family history", "vaccination records"],
        disease: "Diabetes",
        status: "pending",
    },
    {
        id: 4,
        hospitalName: "Metropolitan Hospital",
        accessing: ["basic", "lab results", "sexual history"],
        disease: "Hypertension",
        status: "approved",
    },
    {
        id: 5,
        hospitalName: "Community Care Hospital",
        accessing: ["basic", "allergies", "immunization records"],
        disease: "Migraine",
        status: "pending",
    },
    {
        id: 6,
        hospitalName: "Sunset Health Clinic",
        accessing: ["basic", "medications", "sexual history"],
        disease: "Asthma",
        status: "approved",
    },
    {
        id: 7,
        hospitalName: "Ocean View Hospital",
        accessing: ["basic", "family history", "allergies"],
        disease: "Arthritis",
        status: "approved",
    },
    {
        id: 8,
        hospitalName: "Rosewood Health Center",
        accessing: ["basic", "lab results", "sexual history"],
        disease: "Osteoporosis",
        status: "approved",
    },
    {
        id: 9,
        hospitalName: "Pinecrest Hospital",
        accessing: ["basic", "allergies", "vaccination records"],
        disease: "Depression",
        status: "pending",
    },
    {
        id: 10,
        hospitalName: "Westside Wellness Clinic",
        accessing: ["basic", "medications", "family history"],
        disease: "Cancer",
        status: "approved",
    },
];