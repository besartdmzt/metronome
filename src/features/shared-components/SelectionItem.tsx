import { Box, Typography } from "@mui/material";
import { Colors } from "src/utils/Colors";

interface IBpmItemProps {
  value: number | string;
  selected: boolean;
  text: string;
  onSelect(value: number | string): void;
}

const SelectionItem = (props: IBpmItemProps) => {
  const { value, selected, text, onSelect } = props;
  return (
    <Box
      width="4.75rem"
      height="2.2rem"
      borderRadius="5px"
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={{
        backgroundColor: selected ? Colors.MNBlue : Colors.MNPurple,
        cursor: "pointer",
      }}
      onClick={() => onSelect(value)}
    >
      <Typography variant={selected ? "MN14Black" : "MN14Blue"}>
        {text}
      </Typography>
    </Box>
  );
};

export default SelectionItem;
