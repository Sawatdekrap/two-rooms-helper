import React, { useMemo, useState } from "react";
import ALL_CARDS from "../constants/cards";
import DraftCard from "../components/DraftCard";
import styled from "styled-components";
import DraftCardItf from "../interfaces/draftCard";
import Shelf from "../components/Shelf";
import ShelfCard from "../components/ShelfCard";
import { CardColor, CardType } from "../types/card";
import Modal from "../components/Modal";
import CardInfoComponent from "../components/CardInfo";
import CardItf from "../interfaces/card";
import { COLOR_BG_DARK } from "../styles";

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
  background-color: ${COLOR_BG_DARK};
`;

const ShelfContainer = styled.div`
  flex: 0;
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
  const [draftCards, setDraftCards] = useState<DraftCardItf[]>(
    ALL_CARDS.map((card) => {
      const initialCount = [CardType.PRESIDENT, CardType.BOMBER].includes(
        card.type
      )
        ? 1
        : 0;
      return { card, count: initialCount };
    })
  );
  const [searchText, setSearchtext] = useState("");
  const [modalCard, setModalCard] = useState<CardItf | undefined>();

  const filteredCards = useMemo(() => {
    return draftCards.filter((card) =>
      card.card.type.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, draftCards]);

  const selectedCards = useMemo(() => {
    return draftCards.filter((card) => card.count > 0);
  }, [draftCards]);

  const numSelectedCards = useMemo(() => {
    return draftCards.reduce((total, card) => (total += card.count), 0);
  }, [draftCards]);

  const updateCardCount = (
    color: CardColor,
    type: CardType,
    newCount: number
  ) => {
    const cardIdx = draftCards.findIndex(
      (card) => card.card.color === color && card.card.type === type
    );
    if (cardIdx === -1) return;
    const card = draftCards[cardIdx];
    card.count = newCount;
    draftCards.splice(cardIdx, 1, { ...card });
    setDraftCards([...draftCards]);
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
              const onClickInfo = () => {
                setModalCard(card.card);
              };
              return (
                <DraftCard
                  key={`${card.card.color}-${card.card.type}`}
                  card={card.card}
                  count={card.count}
                  updateCardCount={mappedUpdateCardCount}
                  onClickInfo={onClickInfo}
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
      <Modal active={!!modalCard} closeModal={() => setModalCard(undefined)}>
        <CardInfoComponent card={modalCard as CardItf} />
      </Modal>
    </PageContainer>
  );
};

export default DraftPage;
