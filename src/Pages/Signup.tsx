import {
    Box,
    VStack,
    Input,
    Text,
    Stack,
    InputGroup,
    InputLeftAddon,
    Radio,
    Image,
    RadioGroup,
    Grid,
    Button,
    Center,
    Heading,
    HStack,
    Link,
} from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import { useState } from "react";

export const SignUpPage = () => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleRadioChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleButtonClick = () => {
        console.log(formData);
    };

    return (
        <div>
            <Center h="100vh" mt={"5%"}>
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={2}
                    borderRadius={50}
                    bgColor={"white"}
                    boxShadow="lg"
                    overflow="hidden"
                    h="fit-content"
                    minW="60vw"
                >
                    <Box>
                        <AspectRatio w="100%" h="100%" ratio={4 / 5}>
                            <Image src="doctor.jpg" objectFit="cover" alt="doctor" />
                        </AspectRatio>
                    </Box>

                    <Box bgColor={"white"} p={25} w={"100%"}>
                        <VStack spacing={5}>
                            <Heading mb={6}>Sign Up</Heading>
                            <Stack spacing={2}>
                                <Stack textAlign={"left"} w={"100%"}>
                                    <Text p={1}>Full Name</Text>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        onChange={handleInputChange}
                                    />
                                </Stack>
                                <Stack textAlign={"left"} w={"100%"}>
                                    <Text p={1}>Email</Text>
                                    <Input
                                        id="email"
                                        placeholder="johndoe@apple.com"
                                        onChange={handleInputChange}
                                    />
                                </Stack>
                                <Stack textAlign={"left"} w={"100%"}>
                                    <Text p={1}>Mobile Number</Text>
                                    <InputGroup>
                                        <InputLeftAddon children="+91" />
                                        <Input
                                            id="mobile"
                                            placeholder="9876543210"
                                            onChange={handleInputChange}
                                        />
                                    </InputGroup>
                                </Stack>
                                <Stack textAlign={"left"} w={"100%"}>
                                    <Text p={1}>Password</Text>
                                    <Input
                                        id="password"
                                        placeholder="Password"
                                        onChange={handleInputChange}
                                    />
                                </Stack>
                                <RadioGroup
                                    onChange={(value) =>
                                        handleRadioChange("gender", value)
                                    }
                                    defaultValue="Male"
                                    value={formData["gender"]}
                                    textAlign={"left"}
                                >
                                    <Text p={1}>Gender</Text>
                                    <HStack ml={2}>
                                        <Radio value="male" colorScheme="blue">
                                            Male{" "}
                                        </Radio>
                                        <Radio value="female" colorScheme="red">
                                            Female
                                        </Radio>
                                    </HStack>
                                </RadioGroup>
                            </Stack>
                            <Button
                                colorScheme="blue"
                                color={"white"}
                                onClick={handleButtonClick}
                            >
                                Sign Up
                            </Button>
                        </VStack>

                        <Box justifyContent={"left"} mt={"12"}>
                                        <Text>
                                            Already have an account? {" "}
                                            <Link color={"blue"} href="/">
                                                Login
                                            </Link>
                                        </Text>
                                    </Box>
                    </Box>
                </Grid>
            </Center>
        </div>
    );
};
