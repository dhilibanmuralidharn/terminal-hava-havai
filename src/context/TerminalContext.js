import React from "react";

const TerminalContext = React.createContext({
  terminalList: [],
  removeTerminal: () => {},
});

export default TerminalContext;
