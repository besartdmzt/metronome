import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SongsList = () => {
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      textAlign="center"
      justifyContent="center"
      flexDirection="column"
      paddingTop="2rem"
    >
      <Typography pb="0.5rem" variant="MN14Blue">
        {t("SONGS_THAT_USE_THIS_BPM")}:
      </Typography>

      <Typography pb="0.5rem" variant="MN14Grey">
        {t("SONGS_THAT_USE_THIS_BPM")}:
      </Typography>

      <Typography pb="0.5rem" variant="MN14Grey">
        {t("SONGS_THAT_USE_THIS_BPM")}:
      </Typography>
    </Box>
  );
};

export default SongsList;
