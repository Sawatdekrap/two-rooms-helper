import React from "react";
import styled from "styled-components";
import CardItf from "../interfaces/card";

const WIDTH = "160px";
const HEIGHT = "240px";

const CardContainer = styled.div`
  width: ${WIDTH};
  height: ${HEIGHT};
  margin: 8px;
  background-color: black;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
`;

const CardImage = styled.img<{ isSelected: boolean }>`
  width: ${WIDTH};
  height: ${HEIGHT};
  ${(props) => props.isSelected && "opacity: 0.75;"}

  :hover {
    cursor: pointer;
    opacity: 0.75;
  }

  :active {
    opacity: 0.5;
  }
`;

const CountOverlay = styled.div`
  position: relative;
  top: calc(-${HEIGHT} - 4px);
  left: 0;
  width: ${WIDTH};
  height: ${HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.5);

  :hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const OverlayItem = styled.div`
  font-size: 64px;
`;

const OverlayAction = styled.div`
  font-size: 52px;

  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.9);
  }
`;

interface DraftCardProps {
  card: CardItf;
  count: number;
  updateCardCount: (count: number) => void;
}

const DraftCard = ({ card, updateCardCount, count }: DraftCardProps) => {
  const imageUrl = `cards/${card.color}-${card.type}.jpg`;
  const isSelected = count > 0;

  const selectNew = () => {
    !isSelected && updateCardCount(1);
  };

  return (
    <CardContainer onClick={selectNew}>
      <CardImage src={imageUrl} isSelected={isSelected} draggable="false" />
      {isSelected && (
        <CountOverlay>
          <OverlayAction onClick={() => updateCardCount(count - 1)}>
            -
          </OverlayAction>
          <OverlayItem>{count}</OverlayItem>
          <OverlayAction onClick={() => updateCardCount(count + 1)}>
            +
          </OverlayAction>
        </CountOverlay>
      )}
    </CardContainer>
  );
};

export default DraftCard;
