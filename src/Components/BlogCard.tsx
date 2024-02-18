import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomCard = ({ imageUrl, altText, title, description, price, buttonText, backgroundColor }: any) => {
    return (
        <Card maxW="sm" backgroundColor={backgroundColor} borderRadius="lg">
            <CardBody>
                {imageUrl && <Image
                    src={imageUrl}
                    alt={altText}
                    borderRadius="lg"
                />}
                <Stack mt="6" spacing="3">
                    <Heading size="md">{title}</Heading>
                    <Text>
                        {description}
                    </Text>
                    {price && <Text color="blue.600" fontSize="2xl">
                        ${price}
                    </Text>}
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue" onClick={() => { null; }}>
                        {buttonText}
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

