import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";

const SongsList = () => {
  const { t } = useTranslation();
  const filteredSongs = useSelector(
    (state: RootState) => state.songs.filteredSongs
  );

  return (
    <Box
      display="flex"
      textAlign="center"
      justifyContent="center"
      flexDirection="column"
      paddingTop="2rem"
    >
      {filteredSongs.map((song, index) => {
        return (
          <Typography key={index} pb="0.5rem" variant="MN14Blue">
            {song.name} {song.artist}
          </Typography>
        );
      })}
    </Box>
  );
};

export default SongsList;
