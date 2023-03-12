import React from "react";
import styled from "styled-components";
import CardItf from "../interfaces/card";
import {
  getCardImageUrl,
  getCardInfo,
  lightDarkForCardColor,
  getCardImageUrlFromId,
} from "../utils";
import { COLOR_PRO, COLOR_CON, COLOR_DARK, FONT_TITLE } from "../styles";

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

const CardImage = styled.img`
  flex: 1;
  height: 150%;
`;

const CardInfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: scroll;
`;

const CardInfoName = styled.div`
  font-size: 64px;
  font-weight: bold;
  font-family: ${FONT_TITLE};
`;

const CardInfoDescription = styled.div`
  font-size: 24px;
  font-style: italic;
`;

const DetailsWrapper = styled.div`
  flex: auto;
  background-color: white;
  color: ${COLOR_DARK};
  padding: 0 8px;
`;

const CardInfoExplaination = styled.div`
  font-size: 16px;
  margin: 8px 0;
`;

const Point = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 4px;
`;

const PointMarker = styled.div<{ backgroundColor: string }>`
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 50%;
  margin: 0 4px;
`;

const PointText = styled.div`
  flex: auto;
`;

const RelatedCardWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

const RelatedCard = styled.img`
  width: 100px;
  height: 150px;
  margin: 4px;
  border-radius: 4px;
`;

interface CardInfoProps {
  card: CardItf;
}

const CardInfo = ({ card }: CardInfoProps) => {
  const cardImageUrl = getCardImageUrl(card);
  const cardInfo = getCardInfo(card);

  const explaination = cardInfo?.explaination || "Temp explaination";
  const pro = cardInfo?.pro || "Temp pro";
  const con = cardInfo?.con || "Temp con";

  const [primaryColor, secondaryColor] = lightDarkForCardColor(card.color);

  return (
    <CardInfoWrapper style={{ backgroundColor: secondaryColor }}>
      <CardImage src={cardImageUrl} />
      <CardInfoContainer>
        <CardInfoName>{cardInfo.name.toUpperCase()}</CardInfoName>
        <CardInfoDescription>{cardInfo.description}</CardInfoDescription>
        <DetailsWrapper>
          <CardInfoExplaination>{explaination}</CardInfoExplaination>
          <Point>
            <PointMarker backgroundColor={COLOR_PRO}>+</PointMarker>
            <PointText>{pro}</PointText>
          </Point>
          <Point>
            <PointMarker backgroundColor={COLOR_CON}>-</PointMarker>
            <PointText>{con}</PointText>
          </Point>
          {cardInfo.related && (
            <>
              {" "}
              <h3>Related Cards</h3>
              <RelatedCardWrapper>
                {cardInfo.related.map((relatedCardId) => {
                  const relatedCardImgUrl =
                    getCardImageUrlFromId(relatedCardId);
                  return (
                    <RelatedCard
                      key={relatedCardId.toString()}
                      src={relatedCardImgUrl}
                    />
                  );
                })}
              </RelatedCardWrapper>
            </>
          )}
        </DetailsWrapper>
      </CardInfoContainer>
    </CardInfoWrapper>
  );
};

export default CardInfo;
