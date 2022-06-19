import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  wrapper: {
    minWidth: 320,
    maxWidth: 1200,

    margin: "0 auto",
  },

  header: {
    fontFamily: "'Exo 2'",
    fontSize: 36,
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight: "42px",

    marginBottom: 26,
  },

  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 320px))",
    gridGap: 80,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
