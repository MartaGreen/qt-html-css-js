import { createUseStyles } from "react-jss";
import catImg from "../../assets/cat.png";

const styles = createUseStyles({
  border: {
    position: "relative",
    height: "92.3%",

    background: "#1698D9",

    clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
    borderRadius: 10,
    padding: 4,

    transition: "0.3s",

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
    width: 228,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    marginTop: 16,

    "&:before": {
      content: "'Сказочное заморское яство'",
      fontSize: 16,
      letterSpacing: 0.1,

      marginBottom: 5,
    },
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
    height: 75,

    background: "#1698D9",
    borderRadius: "50%",
    color: "#FFFFFF",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",

    paddingBottom: 5,

    transition: "0.3s",
  },

  selected: {
    background: "#D91667",

    "& $description__weight": {
      background: "#D91667",
    },

    "&:hover": {
      background: "#E52E7A",

      "& $description__weight": {
        background: "#E52E7A",
      },

      "& $preview__description:before": {
        content: "'Котэ не одобряет?'",
        color: "#E62E7A",
      },
    },
  },

  disabled: {
    background: "#B3B3B3",
    pointerEvents: "none",

    "-webkit-touch-callout": "none" /* iOS Safari */,
    "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
    "-khtml-user-select": "none" /* Konqueror */,
    "-moz-user-select": "none" /* Firefox */,
    "-ms-user-select": "none" /* Internet Explorer/Edge */,
    "user-select": "none",

    "& $description__weight": {
      background: "#B3B3B3",
    },
    "& $preview": {
      zIndex: 1000,
      opacity: "45%",
    },
  },

  // disabledBlock: {
  //   position: "absolute",
  //   top: 0,
  //   left: 0,

  //   width: "100%",
  //   height: "100%",

  //   background: "#FFFFFF",
  //   zIndex: -1,
  //   opacity: "40%",
  //   clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
  //   borderRadius: 10,
  // },
});

export default styles;
