import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const AppointmentCard = ({
    date,
    time,
    hospitalName,
    doctorName,
    isNext,
    bgColor,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            bg={bgColor}
            width="100%"
            height={"200px"}
        >
            <Flex justifyContent="space-between" alignItems="center" mb={2}>
                <Text fontSize="sm" color="gray.500">
                    {isNext ? "Next" : "Previous"}
                </Text>
                <Text fontSize="sm" color="gray.500">
                    {date} at {time}
                </Text>
            </Flex>
            <Heading fontSize="lg" mb={2} mt={8}>
                {hospitalName}
            </Heading>
            <Text fontSize="md" color="gray.600" mb={2}>
                Doctor: {doctorName}
            </Text>
            <Button colorScheme="blue" size="sm">
                View {isNext ? "Report" : "Details"}
            </Button>
        </Box>
    );
};

export default AppointmentCard;
