import React from "react";
import styled from "styled-components";
import CardItf from "../interfaces/card";
import { getCardInfo, lightDarkForCardColor } from "../utils";
import { getIconImageUrl } from "../utils";

const CardContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  font-size: 14px;
  font-weight: bold;
`;

const CardIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const CardDescription = styled.div<{ color: string }>`
  flex: auto;
  padding: 4px;
  color: ${(props) => props.color};
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
