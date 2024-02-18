import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useGetPatientQuery } from "../../api/patient";

export const PatientCard = () => {
    const { data } = useGetPatientQuery("patient@gmail.com");
    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            bg="white"
            width="35vw"
        >
            <Heading fontSize="xl" mb={4}>
                Patient Details
            </Heading>
            <VStack align="start" spacing={2}>
                <Flex justifyContent="space-between" width="100%">
                    <Text>
                        <strong>Name:</strong>
                    </Text>
                    <Text>
                        {data?.patient?.firstName} {data?.patient?.lastName}
                    </Text>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                    <Text>
                        <strong>Email:</strong>
                    </Text>
                    <Text>{data?.email}</Text>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                    <Text>
                        <strong>Mobile:</strong>
                    </Text>
                    <Text>{data?.patient?.mobile}</Text>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                    <Text>
                        <strong>Blood Group:</strong>
                    </Text>
                    <Text>{data?.patient?.details.bloodGroup}</Text>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                    <Text>
                        <strong>Gender:</strong>
                    </Text>
                    <Text>{data?.gender}</Text>
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                    <Text>
                        <strong>Allergies:</strong>
                    </Text>
                    <Text>{data?.patient?.details.allergies}</Text>
                </Flex>
            </VStack>
        </Box>
    );
};
