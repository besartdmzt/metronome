import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Typography
      paddingTop="4rem"
      display="flex"
      textAlign="center"
      justifyContent="center"
      variant="MN18"
    >
      {t("TITLE")}
    </Typography>
  );
};

export default Header;
