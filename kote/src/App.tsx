import React from "react";

import Card from "./components/card/card";
import CARDS_DATA from "./constants/cardsData.constants";

function App() {
  return (
    <div>
      <main>
        {CARDS_DATA.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </main>
    </div>
  );
}
export default App;
