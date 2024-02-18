import {
    Box,
    Button,
    Flex,
    Table,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

import { CiSquareCheck } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoClipboardOutline } from "react-icons/io5";

const tableData: {
    hospitalName: string;
    accessing: string[];
    disease: string;
    status: string;
}[] = [
    {
        hospitalName: "Clinique Hospital",
        accessing: ["basic", "allergies", "sexual history"],
        disease: "Influenza",
        status: "pending",
    },
    {
        hospitalName: "General Hospital",
        accessing: ["basic", "lab results", "medications"],
        disease: "Pneumonia",
        status: "approved",
    },
    {
        hospitalName: "Unity Health Clinic",
        accessing: ["basic", "family history", "vaccination records"],
        disease: "Diabetes",
        status: "pending",
    },
    {
        hospitalName: "Metropolitan Hospital",
        accessing: ["basic", "lab results", "sexual history"],
        disease: "Hypertension",
        status: "approved",
    },
    {
        hospitalName: "Community Care Hospital",
        accessing: ["basic", "allergies", "immunization records"],
        disease: "Migraine",
        status: "pending",
    },
    {
        hospitalName: "Sunset Health Clinic",
        accessing: ["basic", "medications", "sexual history"],
        disease: "Asthma",
        status: "approved",
    },
    {
        hospitalName: "Ocean View Hospital",
        accessing: ["basic", "family history", "allergies"],
        disease: "Arthritis",
        status: "pending",
    },
    {
        hospitalName: "Rosewood Health Center",
        accessing: ["basic", "lab results", "sexual history"],
        disease: "Osteoporosis",
        status: "approved",
    },
    {
        hospitalName: "Pinecrest Hospital",
        accessing: ["basic", "allergies", "vaccination records"],
        disease: "Depression",
        status: "pending",
    },
    {
        hospitalName: "Westside Wellness Clinic",
        accessing: ["basic", "medications", "family history"],
        disease: "Cancer",
        status: "approved",
    },
];

export const PatientManagePage = () => {
    return (
        <Box>
            <Flex maxH={"50vh"} w={"w-screen"}>
                <Box
                    w={"80vw"}
                    overflow="auto"
                    m="auto"
                    bgColor={"white"}
                    borderRadius={"2vh"}
                >
                    <Table variant="simple">
                        <TableCaption>Approve or Mange existing connections</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Hospital Name</Th>
                                <Th>Disease</Th>
                                <Th>Accessing</Th>
                                <Th>Status</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tableData.map((row, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{row.hospitalName}</Td>
                                        <Td>{row.disease}</Td>
                                        <Td>{row.accessing.join(", ")}</Td>
                                        <Td>{row.status.toLocaleUpperCase()}</Td>
                                        <Td>
                                            {row.status === "approved" ? (
                                                <Button variant={"ghost"}>
                                                    <IoClipboardOutline color="blue" />
                                                </Button>
                                            ) : (
                                                <Box>
                                                    <Button variant={"ghost"}>
                                                        <CiSquareCheck color="green" />
                                                    </Button>
                                                    <Button variant={"ghost"}>
                                                        <RiDeleteBin7Line color="red" />
                                                    </Button>
                                                </Box>
                                            )}
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                        {/* <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot> */}
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
};
