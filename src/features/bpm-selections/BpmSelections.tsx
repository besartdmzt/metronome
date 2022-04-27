import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeBpmValue } from "src/app/songs-slice";
import { RootState } from "src/app/store";
import SelectionItem from "../shared-components/SelectionItem";

const BpmSelections = () => {
  const dispatch = useDispatch();
  const selectedBpm = useSelector(
    (state: RootState) => state.songs.selectedBpm
  );

  const selectBpm = (value: number) => {
    dispatch(changeBpmValue(value));
  };

  return (
    <Box mt="3.75rem">
      <Box display="flex" justifyContent="space-evenly" flexDirection="row">
        <SelectionItem
          selected={selectedBpm === 72}
          onSelect={selectBpm}
          value={72}
          text={"72 BPM"}
        />
        <SelectionItem
          selected={selectedBpm === 74}
          onSelect={selectBpm}
          value={74}
          text={"74 BPM"}
        />
        <SelectionItem
          selected={selectedBpm === 82}
          onSelect={selectBpm}
          value={82}
          text={"82 BPM"}
        />
      </Box>

      <Box
        mt="0.75rem"
        display="flex"
        justifyContent="space-evenly"
        flexDirection="row"
      >
        <SelectionItem
          selected={selectedBpm === 84}
          onSelect={selectBpm}
          value={84}
          text={"84 BPM"}
        />
        <SelectionItem
          selected={selectedBpm === 128}
          onSelect={selectBpm}
          value={128}
          text={"128 BPM"}
        />
        <SelectionItem
          selected={selectedBpm === 138}
          onSelect={selectBpm}
          value={138}
          text={"138 BPM"}
        />
      </Box>
    </Box>
  );
};

export default BpmSelections;
