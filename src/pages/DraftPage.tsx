import React, { useMemo, useState } from "react";
import ALL_CARDS from "../constants/cards";
import DraftCard from "../components/DraftCard";
import styled from "styled-components";
import SelectedCardItf from "../interfaces/selectedCard";
import Shelf from "../components/Shelf";
import ShelfCard from "../components/ShelfCard";
import { CardColor, CardType } from "../types/card";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

const ShelfContainer = styled.div`
  flex: 0;
  z-index: 1;
`;

const DraftPageContent = styled.div`
  flex: auto;
  overflow-y: scroll;
`;

const DraftCardsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  overflow-y: scroll;
  justify-content: center;
`;

const DraftPageHeader = styled.div`
  flex: 0;
  top: 0;
  padding: 8px;
  background-color: white;
`;

const DraftPage = () => {
  const [cards, setCards] = useState<SelectedCardItf[]>(
    ALL_CARDS.map((card) => {
      return { card, count: 0 };
    })
  );
  const [searchText, setSearchtext] = useState("");

  const filteredCards = useMemo(() => {
    return cards.filter((card) =>
      card.card.type.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, cards]);

  const selectedCards = useMemo(() => {
    return cards.filter((card) => card.count > 0);
  }, [cards]);

  const numSelectedCards = useMemo(() => {
    return cards.reduce((total, card) => (total += card.count), 0);
  }, [cards]);

  const updateCardCount = (
    color: CardColor,
    type: CardType,
    newCount: number
  ) => {
    const cardIdx = cards.findIndex(
      (card) => card.card.color === color && card.card.type === type
    );
    if (cardIdx === -1) return;
    const card = cards[cardIdx];
    card.count = newCount;
    cards.splice(cardIdx, 1, { ...card });
    setCards([...cards]);
  };

  return (
    <PageContainer>
      <ContentContainer>
        <DraftPageHeader>
          <h1>Draft Page</h1>
          <input
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
        </DraftPageHeader>

        <DraftPageContent>
          <DraftCardsContainer>
            {filteredCards.map((card) => {
              const mappedUpdateCardCount = (count: number) => {
                updateCardCount(card.card.color, card.card.type, count);
              };
              return (
                <DraftCard
                  key={`${card.card.color}-${card.card.type}`}
                  card={card.card}
                  count={card.count}
                  updateCardCount={mappedUpdateCardCount}
                />
              );
            })}
          </DraftCardsContainer>
        </DraftPageContent>
      </ContentContainer>
      <ShelfContainer>
        <Shelf
          title={`Selected Cards (${numSelectedCards})`}
          fallbackText="No cards selected"
        >
          {selectedCards.map((card) => {
            const updateCount = (newCount: number) =>
              updateCardCount(card.card.color, card.card.type, newCount);
            return (
              <ShelfCard
                key={`${card.card.color}-${card.card.type}`}
                card={card.card}
                updateCount={updateCount}
                count={card.count}
              />
            );
          })}
        </Shelf>
      </ShelfContainer>
    </PageContainer>
  );
};

export default DraftPage;
