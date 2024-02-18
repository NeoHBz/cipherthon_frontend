import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

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
            <Heading fontSize="xl" mb={2}>
                {name}
            </Heading>
            <Text fontSize="md" color="gray.600" mb={2}>
                <strong>Gender:</strong> {gender}
            </Text>
            <Text fontSize="md" color="gray.600" mb={2}>
                <strong>Blood Group:</strong> {bloodGroup}
            </Text>
            <Button colorScheme="blue" size="sm" onClick={onButtonClick}>
                {buttonText}
            </Button>
        </Box>
    );
};

