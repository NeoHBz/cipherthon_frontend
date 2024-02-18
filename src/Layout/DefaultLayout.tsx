import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
export const DefaultLayout = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    return (
        <ChakraProvider>
            <Box minH="100vh" style={{
                overflow: "hidden",
             }}>
                {children}
            </Box>
        </ChakraProvider>
    );
};
