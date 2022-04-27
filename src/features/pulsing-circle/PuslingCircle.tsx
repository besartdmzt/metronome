import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { Colors } from "src/utils/Colors";

const PulsingCircle = () => {
  const classes = useStyles();
  const selectedBpm = useSelector(
    (state: RootState) => state.songs.selectedBpm
  );

  return (
    <Box className={classes.container}>
      <Box className={classes.pulsingCircle}>
        <Typography className={classes.bpm} variant="MN24">
          {selectedBpm}
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: "10rem",
    marginBottom: "10rem",
  },
  "@keyframes pulse-ring": {
    "0%": {
      transform: "scale(.33)",
    },
    "80%, 100%": {
      opacity: 0,
    },
  },
  "@keyframes pulse-dot": {
    "0%": {
      transform: "scale(.8)",
    },
    "50%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(.8)",
    },
  },
  pulsingCircle: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: "8.25rem",
    height: "8.25rem",
    "&::before": {
      content: '""',
      position: "relative",
      display: "block",
      width: "200%",
      height: "200%",
      boxSizing: "border-box",
      marginLeft: "-50%",
      marginTop: "-50%",
      borderRadius: "50%",
      background:
        "radial-gradient(ellipse 100% 100% at 50% 50%, rgb(100, 188, 164) 0%, rgba(100, 188, 164, 0) 100%)",
      animation: `$pulse-ring 1s cubic-bezier(0.1, 0.50, 0.50, 1) infinite`,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "0",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: Colors.MNGreen,
      borderRadius: "50%",
      boxShadow: "0 0 8px rgba(0,0,0,.3)",
      animation:
        "$pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite",
    },
  },
  bpm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
  },
});

export default PulsingCircle;
