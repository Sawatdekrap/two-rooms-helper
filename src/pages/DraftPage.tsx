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
import {
  PageWrapper,
  Header,
  Body,
  Footer,
  Title,
} from "../components/PageElements";
import DraftErrors from "../components/DraftErrors";

const DraftWrapper = styled.div`
  display: flex;
`;

const DraftHeader = styled.div`
  flex: 0;
  padding: 32px 0;
  text-align: center;
`;

const DraftContentWrapper = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const DraftCardsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ShelfContainer = styled.div`
  position: sticky;
  top: 0;
  flex: 0;
  max-height: 100vh;
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
    <PageWrapper>
      <Header>
        <Title>Draft Page</Title>
      </Header>
      <Body>
        <DraftWrapper>
          <DraftContentWrapper>
            <DraftHeader>
              <input
                value={searchText}
                onChange={(e) => setSearchtext(e.target.value)}
              />
              <DraftErrors
                draftCards={draftCards}
                setDraftCards={setDraftCards}
              />
            </DraftHeader>
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
          </DraftContentWrapper>

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
        </DraftWrapper>
        <Modal active={!!modalCard} closeModal={() => setModalCard(undefined)}>
          <CardInfoComponent card={modalCard as CardItf} />
        </Modal>
      </Body>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default DraftPage;
