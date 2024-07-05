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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TerminalContext from "../../context/TerminalContext";

export default function AirportList({ terminalList }) {
  const { removeTerminal } = useContext(TerminalContext);
  const clickToRemoveTerminal = (id) => {
    removeTerminal(id);
  };
  const navigate = useNavigate();

  const clickToEdit = () => {
    navigate("/detail");
  };
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
              <Column align="center">Actions</Column>
            </TableHeader>
            <TableBody>
              {terminalList.map((item, index) => (
                <Row key={index}>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.country}</Cell>
                  <Cell>{item.code}</Cell>
                  <Cell>{item.Terminals}</Cell>
                  <Cell>
                    <Flex gap="size-100" justifyContent="center">
                      <button onClick={clickToEdit}>
                        <img src="./assets/vector.png" alt="edit" />
                      </button>
                      <button onClick={() => clickToRemoveTerminal(item.id)}>
                        <img src="./assets/Right Icon.png" alt="delete" />
                      </button>
                    </Flex>
                  </Cell>
                </Row>
              ))}
            </TableBody>
          </TableView>
        </Flex>
      </Provider>
    </div>
  );
}
