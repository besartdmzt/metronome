import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectVersion } from "src/app/songs-slice";
import { RootState } from "src/app/store";
import BpmItem from "src/features/shared-components/SelectionItem";

const VersionSelection = () => {
  const dispatch = useDispatch();
  const version = useSelector((state: RootState) => state.songs.version);

  const onVersionSelect = (value: "v1" | "v2") => {
    dispatch(selectVersion(value));
  };

  return (
    <Box mt="2rem">
      <Box display="flex" justifyContent="space-evenly" flexDirection="row">
        <BpmItem
          selected={version === "v1"}
          onSelect={onVersionSelect}
          value={"v1"}
          text="V1"
        />
        <BpmItem
          selected={version === "v2"}
          onSelect={onVersionSelect}
          value={"v2"}
          text={"V2"}
        />
      </Box>
    </Box>
  );
};

export default VersionSelection;
