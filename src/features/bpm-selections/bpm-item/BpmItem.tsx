import { Box, Typography } from "@mui/material";
import { Colors } from "src/utils/Colors";

interface IBpmItemProps {
  value: number;
  selected: boolean;
  onSelect(value: number): void;
}

const BpmItem = (props: IBpmItemProps) => {
  const { value, selected, onSelect } = props;
  return (
    <Box
      width="5.25rem"
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
        BPM {value}
      </Typography>
    </Box>
  );
};

export default BpmItem;
