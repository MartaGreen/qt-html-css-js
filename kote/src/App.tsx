import React from "react";
import styles from "./App.style";

import Card from "./components/card/card";
import CARDS_DATA from "./constants/cardsData.constants";

function App() {
  const classes = styles();

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>Ты сегодня покормил кота?</header>
      <main className={classes.main}>
        {CARDS_DATA.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </main>
    </div>
  );
}
export default App;
