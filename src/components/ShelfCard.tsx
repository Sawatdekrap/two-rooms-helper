import React from "react";
import styled from "styled-components";
import CardItf from "../interfaces/card";
import { lightDarkForCardColor } from "../utils";

const CardContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  font-size: 14px;
  font-weight: bold;
`;

const CardCount = styled.div<{ color: string; backgroundColor: string }>`
  flex: 0 0 16px;
  padding: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const CardDescription = styled.div<{ color: string }>`
  flex: auto;
  padding: 4px;
  color: ${(props) => props.color};
`;

const CardActions = styled.div<{ color: string; backgroundColor: string }>`
  flex: 0;
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

const ActionButton = styled.button`
  flex: 0;
  border: none;
  background-color: inherit;
  width: 16px;
  height: 16px;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

interface ShelfCardProps {
  card: CardItf;
  count: number;
  updateCount: (newCount: number) => void;
}

const ShelfCard = ({ card, updateCount, count }: ShelfCardProps) => {
  const description = `(${count}) ${card.type}`;
  const [primaryColor, secondaryColor] = lightDarkForCardColor(card.color);

  return (
    <CardContainer backgroundColor={secondaryColor}>
      <CardDescription color={"white"}>{description}</CardDescription>
    </CardContainer>
  );
};

export default ShelfCard;
