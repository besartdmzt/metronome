import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBpmValue, filterSongs } from "src/app/songs-slice";
import { RootState } from "src/app/store";
import BpmItem from "./bpm-item/BpmItem";

const BpmSelections = () => {
  const dispatch = useDispatch();
  const selectedBpm = useSelector(
    (state: RootState) => state.songs.selectedBpm
  );

  useEffect(() => {
    dispatch(filterSongs(selectedBpm));
  }, [selectedBpm, dispatch]);

  const selectBpm = (value: number) => {
    dispatch(changeBpmValue(value));
  };

  return (
    <Box mt="3.75rem">
      <Box display="flex" justifyContent="space-evenly" flexDirection="row">
        <BpmItem
          selected={selectedBpm === 72}
          onSelect={selectBpm}
          value={72}
        />
        <BpmItem
          selected={selectedBpm === 74}
          onSelect={selectBpm}
          value={74}
        />
        <BpmItem
          selected={selectedBpm === 82}
          onSelect={selectBpm}
          value={82}
        />
      </Box>

      <Box
        mt="0.75rem"
        display="flex"
        justifyContent="space-evenly"
        flexDirection="row"
      >
        <BpmItem
          selected={selectedBpm === 84}
          onSelect={selectBpm}
          value={84}
        />
        <BpmItem
          selected={selectedBpm === 128}
          onSelect={selectBpm}
          value={128}
        />
        <BpmItem
          selected={selectedBpm === 138}
          onSelect={selectBpm}
          value={138}
        />
      </Box>
    </Box>
  );
};

export default BpmSelections;
