import { Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <Box p="6">
      <Flex direction="column" gap="4" align="center">
        <Heading size="8" className="font-serif">
          King's Barber
        </Heading>
        <Text size="4" color="gray">
          Premium Grooming Services
        </Text>
        <Flex gap="3" mt="4">
          <Button size="3">Book Appointment</Button>
          <Button size="3" variant="outline">
            View Services
          </Button>
        </Flex>

        <Card mt="6" style={{ maxWidth: 400 }}>
          <Flex direction="column" gap="2">
            <Heading size="4">Welcome</Heading>
            <Text color="gray">
              Experience the finest cuts and shaves. Classic style, modern
              service.
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
