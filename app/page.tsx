import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";

export default function Page() {
  return (
    <Box>
      {/* Hero Section */}
      <Box py={{ initial: "9", md: "9" }}>
        <Container size="3">
          <Flex
            direction="column"
            gap="4"
            align="center"
            style={{ textAlign: "center" }}
          >
            <Heading size={{ initial: "8", md: "9" }} className="font-serif">
              King's Barber
            </Heading>
            <Text
              size={{ initial: "3", md: "5" }}
              color="gray"
              style={{ maxWidth: 500 }}
            >
              Premium Grooming Services. Experience the finest cuts and shaves.
              Classic style, modern service.
            </Text>
            <Flex gap="3" mt="4" wrap="wrap" justify="center">
              <Button size={{ initial: "3", md: "4" }}>Book Appointment</Button>
              <Button size={{ initial: "3", md: "4" }} variant="outline">
                View Services
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py="9">
        <Container size="3">
          <Flex gap="4" direction={{ initial: "column", md: "row" }}>
            <Card style={{ flex: 1 }}>
              <Flex direction="column" gap="2">
                <Heading size="4">Expert Barbers</Heading>
                <Text color="gray">
                  Our skilled barbers bring years of experience to every cut.
                </Text>
              </Flex>
            </Card>
            <Card style={{ flex: 1 }}>
              <Flex direction="column" gap="2">
                <Heading size="4">Premium Products</Heading>
                <Text color="gray">
                  We use only the finest grooming products for your care.
                </Text>
              </Flex>
            </Card>
            <Card style={{ flex: 1 }}>
              <Flex direction="column" gap="2">
                <Heading size="4">Classic Experience</Heading>
                <Text color="gray">
                  Enjoy a traditional barbershop atmosphere with modern comfort.
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
