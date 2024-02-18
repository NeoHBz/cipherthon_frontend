import {
    Box,
    Link,
    Flex,
    VStack,
    HStack,
    Text,
    Input,
    Grid,
    Button,
    GridItem,
} from "@chakra-ui/react";
import { HospitalSVG } from "../assets/svg/Hospital";
export const LoginPage = () => {
    const handleSubmit = () => {
        return true;
    }

    return (
        <div>
            <Grid mt={"10%"} templateColumns={"repeat(2,1fr)"}>
                <GridItem
                    bgColor={"whitesmoke"}
                    borderTopLeftRadius={30}
                    style={{ borderRight: "2px solid white" }}
                    borderBottomLeftRadius={30}
                    fontSize={45}
                    h={560}
                    ml={"10%"}
                    color={"navy"}
                >
                    <Box mt={120} p={15}>
                        <Text fontWeight={60}>
                            A Hospital
                            <Text fontWeight={"bold"}>Bed Is A Parked Taxi</Text>
                            <Text>With A Meter Runnig</Text>
                        </Text>
                    </Box>
                </GridItem>
                <GridItem
                    p={18}
                    borderBottomRightRadius={30}
                    borderTopRightRadius={30}
                    w={480}
                    left={"950"}
                    alignItems="left"
                    textAlign={"left"}
                    justifyContent="left"
                    bgColor={"whitesmoke"}
                    filter="opacity(50)"
                >
                    <Flex>
                        <Box
                            alignItems="left"
                            justifyContent={"left"}
                            display={"flex"}
                            flexDirection={"column"}
                            p={10}
                        >
                            <HStack>
                                <div>
                                    <HospitalSVG
                                        style={{ transform: "scale(0.5)" }}
                                        width="128"
                                        height="128"
                                    />
                                </div>

                                <HStack ml="-6">
                                    <Text fontWeight={"Bold"} fontSize={"25"}>
                                        Health{" "}
                                    </Text>
                                    <Box
                                        fontSize={"25"}
                                        bgColor={"navy"}
                                        p={2}
                                        borderRadius={5}
                                        color={"white"}
                                        fontWeight={"Bold"}
                                        mr={50}
                                    >
                                        HuB
                                    </Box>
                                </HStack>
                            </HStack>
                            <Text fontSize={20} p={1}>
                                Welcome to Hospital HealthHuB
                            </Text>
                            <Box mt={"10"}>
                                <VStack>
                                    <form>
                                        <VStack>
                                            <Input
                                                w={320}
                                                type="email"
                                                placeholder="Email Address"
                                            />

                                            <Input
                                                type="password"
                                                placeholder="Password"
                                            />
                                            <Button
                                                mt={4}
                                                bgColor={"navy"}
                                                type="button"
                                                color={"white"}
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </Button>
                                        </VStack>
                                    </form>
                                    <Box justifyContent={"left"} mt={"12"}>
                                        <Text>
                                            Not a user Sign In ?{" "}
                                            <Link color={"blue"} href="/signup">
                                                Register
                                            </Link>
                                        </Text>
                                    </Box>
                                </VStack>
                            </Box>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </div>
    );
};
