import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";

const PulsingCircle = () => {
  const selectedBpm = useSelector(
    (state: RootState) => state.songs.selectedBpm
  );
  return (
    <Box display="flex" paddingTop="3rem" justifyContent="center">
      <Typography variant="MN18">{selectedBpm}</Typography>
    </Box>
  );
};

export default PulsingCircle;
