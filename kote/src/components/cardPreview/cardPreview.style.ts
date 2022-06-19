import { createUseStyles } from "react-jss";
import catImg from "../../assets/cat.png";

const styles = createUseStyles({
  border: {
    height: "92.3%",

    background: "#1698D9",

    clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
    borderRadius: 10,
    padding: 4,

    "&:hover": {
      cursor: "pointer",
      background: "#2EA8E6",
    },
    "&:hover $description__weight": {
      background: "#2EA8E6",
    },
  },

  preview: {
    position: "relative",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    background: "#ffffff",
    clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",

    backgroundImage: `url(${catImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "50%",
    backgroundPositionY: "183%",

    borderRadius: 10,
  },

  preview__description: {
    height: 130,
    width: 220,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginTop: 15,
  },

  description__dish: {
    fontSize: 16,
    letterSpacing: 0.1,

    marginBottom: 6,
  },
  description__title: {
    fontSize: 48,
    letterSpacing: 1.5,
  },
  description__taste: {
    fontSize: 24,
    letterSpacing: 0.7,

    marginBottom: 14,
  },
  description__offer: {
    fontSize: 14,
  },

  description__weight: {
    position: "absolute",
    right: 12,
    bottom: 12,

    width: 80,
    height: 80,

    background: "#1698D9",
    borderRadius: "50%",
    color: "#FFFFFF",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  ".border:hover": {
    background: "red",
  },
});

export default styles;
