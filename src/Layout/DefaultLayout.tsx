import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../api/store";
export const DefaultLayout = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Box
                    minH="100vh"
                    style={{
                        overflow: "hidden",
                    }}
                >
                    {children}
                </Box>
            </ChakraProvider>
        </Provider>
    );
};
