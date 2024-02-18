/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8080/api/v1'
// Define a service using a base URL and expected endpoints
export const patientApi = createApi({
  reducerPath: 'patientApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPatient: builder.query<User, any>({
      query: (email) => {
        return {
          url: '/user',
          method: 'POST',
          body: {
            email,
          }
        }
      
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPatientQuery,
} = patientApi

interface PatientData {
  id: string;
  firstName: string;
  lastName: string | null;
  mobile: string | null;
  details: any | null; // You might want to replace `any` with a specific type if possible
}

interface User {
  id: string;
  gender: string | null;
  patientId: string;
  doctorId: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
  patient: PatientData;
  doctor: any | null; // You might want to replace `any` with a specific type if possible
}
