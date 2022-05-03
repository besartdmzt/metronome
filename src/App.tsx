import { Container, createTheme, ThemeProvider } from "@mui/material";
import BpmSelections from "src/features/bpm-selections/BpmSelections";
import Header from "src/features/header/Header";
import PulsingCircle from "src/features/pulsing-circle/PuslingCircle";
import SongsList from "src/features/songslist/SongsList";
import { Colors } from "./utils/Colors";
import "./i18n/i18n";
import VersionSelection from "./features/version-selection/VersionSelection";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    MN24: true;
    MN18: true;
    MN14Blue: true;
    MN14Black: true;
    MN14Grey: true;
  }
}

const App = () => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "MN24" },
            style: {
              fontSize: "1.5rem",
              fontFamily: ["Roboto-Regular", "sans-serif"].join(","),
              color: Colors.MNBlack,
              opacity: "50%",
            },
          },
          {
            props: { variant: "MN18" },
            style: {
              fontSize: "1.125rem",
              letterSpacing: "0.375rem",
              fontFamily: ["Roboto-Regular", "sans-serif"].join(","),
              color: Colors.MNBlue,
            },
          },
          {
            props: { variant: "MN14Blue" },
            style: {
              fontSize: "0.875rem",
              fontFamily: ["Roboto-Regular", "sans-serif"].join(","),
              color: Colors.MNBlue,
            },
          },
          {
            props: { variant: "MN14Black" },
            style: {
              fontSize: "0.875rem",
              fontFamily: ["Roboto-Regular", "sans-serif"].join(","),
              color: Colors.MNBlack,
            },
          },
          {
            props: { variant: "MN14Grey" },
            style: {
              fontSize: "0.875rem",
              fontFamily: ["Roboto-Regular", "sans-serif"].join(","),
              color: Colors.MNGrey,
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Header />
        <VersionSelection />
        <PulsingCircle />
        <BpmSelections />
        <SongsList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
