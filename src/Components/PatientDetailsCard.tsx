import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { initialTableData } from "../Pages/Patient/patientData";

export const PatientDetailsCard = ({
    name,
    gender,
    bloodGroup,
    backgroundColor,
    buttonText,
    onButtonClick,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            bg={backgroundColor}
            width="100%"
            height="200px"
        >
            <Flex justifyContent="space-between" alignItems="center" mb={2}>
                <Text fontSize="sm" color="gray.500">
                    Your Patient Card
                </Text>
            </Flex>
            <Heading fontSize="xl" mt={2}>
                {name ?? "First Last"}
            </Heading>
            <Box display="flex" flexDirection="row" justifyContent="space-between" mt={4}>

            <Text fontSize="md" color="gray.600" mb={2}>
                <strong>Approved:</strong> {initialTableData.filter((data) => data.status === "approved").length}
            </Text>
            <Text fontSize="md" color="gray.600" mb={2}>
                <strong>Pending:</strong> {initialTableData.filter((data) => data.status === "pending").length}
            </Text>
            </Box>
            <Button colorScheme="blue" size="sm" onClick={onButtonClick} mt={2}>
                {buttonText}
            </Button>
        </Box>
    );
};

