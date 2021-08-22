import React, { useState } from "react";
import Table from "./components/Table";
import Button from "./components/Button";
import { GiDiamonds, GiHearts, GiClubs, GiSpades } from "react-icons/gi";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [isShown, setIsShown] = useState(false);

  const showCards = () => {
    setIsShown(!isShown);
  };

  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const makeRandomCards = () => {
    const cards = [];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < cardValues.length; v++) {
        const value = cardValues[v];
        const suit = suits[s];
        cards.push({ value, suit });
      }
    }

    return cards;
  };

  const cards = makeRandomCards();
  const randoms1 = [];
  const randoms2 = [];

  const randomCard = (cards, arr) => {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    let entity;

    if (cardSuit === "Hearts") entity = <GiHearts />;
    if (cardSuit === "Diamonds") entity = <GiDiamonds />;
    if (cardSuit === "Spades") entity = <GiSpades />;
    if (cardSuit === "Clubs") entity = <GiClubs />;

    return arr.push({ cardValue, entity });
  };

  Array.from(Array(5)).forEach(() => {
    randomCard(cards, randoms1);
  });

  Array.from(Array(5)).forEach(() => {
    randomCard(cards, randoms2);
  });

  const generateCards = () => {
    console.log(randoms1, randoms2);
  }

  return (
    <div className="App">
      <div className="cards-container">
        {isShown && (
          <div className="card-container ml">
            {randoms1.map((random) => (
              <Card value={random.cardValue} suite={random.entity} />
            ))}
          </div>
        )}
      </div>
      <Table>
        <Button
          className="button"
          buttonName="Generate cards"
          onClick={generateCards}
        />
        <Button
          className="button"
          buttonName="Show cards"
          onClick={showCards}
        />
      </Table>
      {isShown && (
        <div className="card-container mr">
          {randoms2.map((random) => (
            <Card value={random.cardValue} suite={random.entity} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
