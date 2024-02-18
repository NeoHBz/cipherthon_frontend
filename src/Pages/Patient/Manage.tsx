import {
    Box,
    Button,
    Checkbox,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Table,
    TableCaption,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";

import { CiSquareCheck } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoClipboardOutline } from "react-icons/io5";
import { IoBan } from "react-icons/io5";

import { useState } from "react";
import { initialTableData } from "./patientData";


const allAccessing = initialTableData
    .map((data) => data.accessing)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);
export const PatientManagePage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentId, setCurrentId] = useState(0);
    const [currentChecked, setCurrentChecked] = useState<string[]>([]);
    const [tableData, setTableData] = useState(initialTableData);
    return (
        <Box>
            <Flex w={"w-screen"}>
                <Box
                    w={"80vw"}
                    overflow="auto"
                    m="auto"
                    bgColor={"white"}
                    borderRadius={"2vh"}
                >
                    <Table variant="simple">
                        <TableCaption>Approve or Mange existing connections with HealthCare providers</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>HealthCare Provider</Th>
                                <Th>Disease</Th>
                                <Th>Accessing</Th>
                                <Th>Current Status</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tableData.map((row, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{row.hospitalName}</Td>
                                        <Td>{row.disease}</Td>
                                        <Td>{row.accessing.join(", ").length > 0 ? row.accessing.join(", ") : "N/A"}</Td>
                                        <Td>
                                            <Text color={row.status === "approved" ? "green" : "orange"}>
                                                {row.status.slice(0, 1).toUpperCase() + row.status.slice(1)}
                                            </Text>
                                        </Td>
                                        <Td>
                                            {row.status === "approved" ? (
                                                <Box>

                                                <Button
                                                    variant={"ghost"}
                                                    onClick={() => {
                                                        setCurrentChecked(row.accessing);
                                                        setCurrentId(row.id);
                                                        onOpen();
                                                    }}
                                                >
                                                    <IoClipboardOutline color="blue" />
                                                    </Button>
                                                    <Button variant={"ghost"} onClick={() => {
                                                        // remove the row from the table
                                                        setTableData((prev) => prev.filter((value) => value.id !== row.id));
                                                    }}>
                                                        <IoBan color="red" />
                                                    </Button>
                                                </Box>
                                                
                                            ) : (
                                                <Box>
                                                    <Button
                                                        variant={"ghost"}
                                                        onClick={() => {
                                                            setCurrentChecked(
                                                                row.accessing,
                                                            );
                                                            setCurrentId(row.id);
                                                            onOpen();
                                                        }}
                                                    >
                                                        <CiSquareCheck color="green" />
                                                    </Button>
                                                        <Button variant={"ghost"} onClick={() => {
                                                            // remove the row from the table
                                                            setTableData((prev) => prev.filter((value) => value.id !== row.id));
                                                        }}>
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
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Manage</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {allAccessing.map((access, index) => {
                                    return (
                                        <div key={index}>
                                            <Checkbox
                                                isChecked={currentChecked.includes(access)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setCurrentChecked((prev) => [
                                                            ...prev,
                                                            access,
                                                        ]);
                                                    } else {
                                                        setCurrentChecked((prev) =>
                                                            prev.filter(
                                                                (value) => value !== access,
                                                            ),
                                                        );
                                                    }
                                                }}
                                            >
                                                {access}
                                            </Checkbox>
                                        </div>
                                    );
                                })}
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue" mr={3} onClick={() => {
                                    setTableData((prev) => {
                                        return prev.map((data) => {
                                            if (data.id === currentId) {
                                                return {
                                                    ...data,
                                                    accessing: currentChecked,
                                                    status: "approved",
                                                };
                                            }
                                            return data;
                                        });
                                    });
                                    setCurrentChecked([]);
                                    setCurrentId(0);
                                    onClose();
                                }}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Flex>
        </Box>
    );
};
