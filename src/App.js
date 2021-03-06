import React, { useState } from "react";
import Table from "./components/Table";
import Button from "./components/Button";
import { GiDiamonds, GiHearts, GiClubs, GiSpades } from "react-icons/gi";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [randoms1, setRandoms1] = useState([]);
  const [randoms2, setRandoms2] = useState([]);
  const [isWinner1, setIsWinner1] = useState(false);
  const [isWinner2, setIsWinner2] = useState(false);

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

  const randomCard = (cards, arr) => {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    let entity;

    if (cardSuit === "Hearts") entity = <GiHearts />;
    if (cardSuit === "Diamonds") entity = <GiDiamonds />;
    if (cardSuit === "Spades") entity = <GiSpades />;
    if (cardSuit === "Clubs") entity = <GiClubs />;

    return arr.push({ cardValue, entity, pair: false });
  };

  const generateCards = () => {
    Array.from(Array(5)).forEach(() => {
      randomCard(cards, randoms1);
    });

    Array.from(Array(5)).forEach(() => {
      randomCard(cards, randoms2);
    });

    setIsShown(false);
    console.log(randoms1, randoms2);
  };

  let sortedRandomsFirst;
  let sortedRandomsSecond;

  const findPairs = () => {
    sortedRandomsFirst = randoms1.sort((a, b) => a.cardValue.localeCompare(b.cardValue));
    sortedRandomsSecond = randoms2.sort((a, b) => a.cardValue.localeCompare(b.cardValue));

    for (let i = 0; i < sortedRandomsFirst.length - 1; i++) {
      if (sortedRandomsFirst[i].cardValue === sortedRandomsFirst[i + 1].cardValue) {
        sortedRandomsFirst[i].pair = true;
        sortedRandomsFirst[i + 1].pair = true;
      }
    }

    for (let i = 0; i < sortedRandomsSecond.length - 1; i++) {
      if (sortedRandomsSecond[i].cardValue === sortedRandomsSecond[i + 1].cardValue) {
        sortedRandomsSecond[i].pair = true;
        sortedRandomsSecond[i + 1].pair = true;
      }
    }
  };

  findPairs();

  const getWinner = () => {
    const uniqueValuesFirstHand = new Set(randoms1.map((v) => v.cardValue));
    const uniqueValuesSecondHand = new Set(randoms2.map((v) => v.cardValue));

    if (uniqueValuesFirstHand.size < uniqueValuesSecondHand.size) {
      setIsWinner1(true);
    }

    if (uniqueValuesFirstHand.size > uniqueValuesSecondHand.size) {
      setIsWinner2(true);
    }

    if (uniqueValuesFirstHand.size === uniqueValuesSecondHand.size) {
      return;
    }
  };

  const showCards = () => {
    setIsShown(!isShown);
    getWinner();
  };

  const resetCards = () => {
    setRandoms1([]);
    setRandoms2([]);
    setIsWinner1(false);
    setIsWinner2(false);
    setIsShown(!isShown);
  };

  return (
    <div className="App">
      <div className="cards-container">
        {isShown && (
          <div className="card-container ml">
            {sortedRandomsFirst.slice(0, 5).map((random, i) => (
              <Card
                key={i}
                value={random.cardValue}
                suite={random.entity}
                winner={isWinner1 ? "winner" : ""}
                pair={random.pair ? "pair" : ""}
              />
            ))}
          </div>
        )}
      </div>
      {isShown && (
        <span className="winner-title">
          WINNER:{" "}
          {(isWinner1 ? "PLAYER 1" : "") ||
            (isWinner2 ? "PLAYER 2" : "") ||
            (!isWinner1 && !isWinner2 ? "DRAW" : "") ||
            null}
        </span>
      )}
      <Table>
        <Button buttonName="Generate Cards" onClick={generateCards} />
        <Button buttonName="Show Cards" onClick={showCards} />
      </Table>
      <Button
        className="button-center"
        buttonName="NEW GAME"
        onClick={resetCards}
      />
      {isShown && (
        <div className="card-container mr">
          {sortedRandomsSecond.slice(0, 5).map((random, i) => (
            <Card
              key={i}
              value={random.cardValue}
              suite={random.entity}
              winner={isWinner2 ? "winner" : ""}
              pair={random.pair ? "pair" : ""}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
