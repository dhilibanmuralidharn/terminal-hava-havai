import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
  Provider,
  lightTheme,
  ActionButton,
  Button,
  Flex,
  View,
} from "@adobe/react-spectrum";

export default function AirportList() {
  return (
    <div>
      <Provider theme={lightTheme} colorScheme="light">
        <Flex direction="column" gap="size-200">
          <View>
            <h1>Airport</h1>
          </View>
          <Flex gap="size-100" justifyContent="space-between">
            <ActionButton margin="size-100" colorScheme="dark">
              Add new+
            </ActionButton>
            <Flex gap="size-100">
              <Button variant="cta" size="M">
                Edit
              </Button>
              <Button variant="negative" size="M">
                Delete
              </Button>
            </Flex>
          </Flex>
          <TableView
            aria-label="Example table with static contents"
            selectionMode="multiple"
          >
            <TableHeader>
              <Column>All Airport</Column>
              <Column>Country</Column>
              <Column>Code</Column>
              <Column align="end">Terminal</Column>
            </TableHeader>
            <TableBody>
              <Row>
                <Cell>Indra Gandhi International Airport</Cell>
                <Cell>India</Cell>
                <Cell>DEL</Cell>
                <Cell>3</Cell>
              </Row>
              <Row>
                <Cell>Dubai International Airport</Cell>
                <Cell>UAE</Cell>
                <Cell>DXB</Cell>
                <Cell>5</Cell>
              </Row>
              <Row>
                <Cell>Heathrow Airport</Cell>
                <Cell>England</Cell>
                <Cell>LHR</Cell>
                <Cell>6</Cell>
              </Row>
              <Row>
                <Cell>Istanbul Airport</Cell>
                <Cell>Turkey</Cell>
                <Cell>IST</Cell>
                <Cell>3</Cell>
              </Row>
              <Row>
                <Cell>Rajiv Gandhi International Airport</Cell>
                <Cell>Texas</Cell>
                <Cell>DFW</Cell>
                <Cell>14</Cell>
              </Row>
            </TableBody>
          </TableView>
        </Flex>
      </Provider>
    </div>
  );
}
