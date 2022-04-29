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
      data-testid="songs-list-box"
      display="flex"
      textAlign="center"
      justifyContent="center"
      flexDirection="column"
      paddingTop="2rem"
    >
      <Typography pb="0.5rem" variant="MN14Blue">
        {t("SONGS_THAT_USE_THIS_BPM")}:
      </Typography>

      {filteredSongs.map((song, index) => {
        return (
          <Typography key={index} pb="0.5rem" variant="MN14Grey">
            {song.name} {song.artist}
          </Typography>
        );
      })}
    </Box>
  );
};

export default SongsList;
