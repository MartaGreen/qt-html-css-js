import { url } from "inspector";
import { createUseStyles } from "react-jss";
import catImg from "../../assets/cat.png";

const styles = createUseStyles({
  preview: {
    height: "95%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    background: "lightgray",
    clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 5%)",

    backgroundImage: `url(${catImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "70%",
    backgroundPositionY: "180%",
  },

  preview__description: {
    height: 130,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
