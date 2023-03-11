import { CardColor, CardId, CardType } from "./types/card";
import * as styles from "./styles";
import CardItf from "./interfaces/card";
import CARD_INFO, { CardInfoItf } from "./constants/cardInfo";
import ALL_CARDS from "./constants/cards";

export const lightDarkForCardColor = (
  cardColor: CardColor
): [string, string] => {
  switch (cardColor) {
    case CardColor.RED:
      return [styles.RED_LIGHT, styles.RED_DARK];
    case CardColor.BLUE:
      return [styles.BLUE_LIGHT, styles.BLUE_DARK];
    case CardColor.GREY:
      return [styles.GREY_LIGHT, styles.GREY_DARK];
    case CardColor.GREEN:
      return [styles.GREEN_LIGHT, styles.GREEN_DARK];
    case CardColor.OTHER:
      return [styles.PURPLE_LIGHT, styles.PURPLE_DARK];
    default:
      throw `No handling for color '${cardColor}'`;
  }
};

export const getCardImageUrl = (card: CardItf): string => {
  return `cards/${card.color}-${card.type}.jpg`;
};

export const getCardImageUrlFromId = (cardId: CardId): string => {
  return getCardImageUrl(
    ALL_CARDS.find((card) => card.id === cardId) as CardItf
  );
};

export const getIconImageUrl = (card: CardItf): string => {
  let prefix = `${card.color}`;
  if (card.type === CardType.LEPRECHAUN) {
    prefix = `${card.color}-L`;
  } else if (card.type === CardType.ZOMBIE) {
    prefix = `${card.color}-Z`;
  } else if (card.type === CardType.BLUESPY) {
    prefix = `${CardColor.BLUE}`;
  } else if (card.type === CardType.REDSPY) {
    prefix = `${CardColor.RED}`;
  }

  return `icons/${prefix}-ICON.jpg`;
};

export const getCardInfo = (card: CardItf): CardInfoItf => {
  return CARD_INFO[card.type];
};
