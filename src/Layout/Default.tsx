import { ChakraProvider } from '@chakra-ui/react'

export const DefaultLayout = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    return <ChakraProvider>{children}</ChakraProvider>;
};
