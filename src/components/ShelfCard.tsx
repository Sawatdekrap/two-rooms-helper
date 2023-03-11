import React from "react";
import styled from "styled-components";
import CardItf from "../interfaces/card";
import { getCardInfo, lightDarkForCardColor, getIconImageUrl } from "../utils";
import { FONT_TITLE } from "../styles";

const CardContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  font-size: 14px;
  font-weight: bold;
`;

const CardIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px;
  margin-top: 1px;
  object-fit: contain;
`;

const CardDescription = styled.div<{ color: string }>`
  flex: auto;
  padding: 4px 0;
  color: ${(props) => props.color};
  font-family: ${FONT_TITLE};
`;

interface ShelfCardProps {
  card: CardItf;
  count: number;
  updateCount: (newCount: number) => void;
}

const ShelfCard = ({ card, updateCount, count }: ShelfCardProps) => {
  const cardInfo = getCardInfo(card);
  const countSuffix = count > 1 ? ` (${count})` : "";
  const description = `${cardInfo.name.toUpperCase()}${countSuffix}`;
  const [primaryColor, secondaryColor] = lightDarkForCardColor(card.color);
  const iconUrl = getIconImageUrl(card);

  return (
    <CardContainer backgroundColor={secondaryColor}>
      <CardIcon src={iconUrl} />
      <CardDescription color={"white"}>{description}</CardDescription>
    </CardContainer>
  );
};

export default ShelfCard;
