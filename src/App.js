import "./styles.css";
import { Box, Menu, Text, Button } from "grommet";
import { User } from "grommet-icons";
import { useState } from "react";
import { FilterLayer } from "./FilterLayer";
const items = [
  {
    label: "User"
  },
  {
    label: "Logout"
  }
];
export default function App() {
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  return (
    <div className="App">
      {/* <Menu
        icon={false}
        label={
          <Box direction="row" alignSelf="center">
            <Text margin={{ right: "small" }}>Chetan S</Text>
            <User />
          </Box>
        }
        items={items}
      />
      <Button
        label="Show Advance Filter"
        onClick={() => setShowAdvanceFilter(!showAdvanceFilter)}
      />
      {(showAdvanceFilter && <>Test</>) || ""} */}
      <FilterLayer />
    </div>
  );
}
