import { Box } from "@mui/material";
import BpmItem from "./bpm-item/BpmItem";

const BpmSelections = () => {
  const selectBpm = (value: number) => {};

  return (
    <Box mt="3.75rem">
      <Box display="flex" justifyContent="space-evenly" flexDirection="row">
        <BpmItem selected onSelect={selectBpm} value={72} />
        <BpmItem selected={false} onSelect={selectBpm} value={74} />
        <BpmItem selected={false} onSelect={selectBpm} value={82} />
      </Box>

      <Box
        mt="0.75rem"
        display="flex"
        justifyContent="space-evenly"
        flexDirection="row"
      >
        <BpmItem selected={false} onSelect={selectBpm} value={84} />
        <BpmItem selected={false} onSelect={selectBpm} value={128} />
        <BpmItem selected={false} onSelect={selectBpm} value={138} />
      </Box>
    </Box>
  );
};

export default BpmSelections;
