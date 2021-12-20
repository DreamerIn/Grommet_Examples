import "./styles.css";
import { Box, Menu, Text } from "grommet";
import { User } from "grommet-icons";
const items = [
  {
    label: "User"
  },
  {
    label: "Logout"
  }
];
export default function App() {
  return (
    <div className="App">
      <Menu
        icon={false}
        label={
          <Box direction="row" alignSelf="center">
            <Text margin={{ right: "small" }}>Chetan S</Text>
            <User />
          </Box>
        }
        items={items}
      />
    </div>
  );
}
