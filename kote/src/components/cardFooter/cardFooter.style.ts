import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  cardFooter: {
    width: "99%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontSize: 13,
    color: "#FFFFFF",

    marginTop: 15,
  },

  cardFooter__buy: {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    color: "#1698D9",
  },
});

export default styles;
