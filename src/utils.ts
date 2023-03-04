import { CardColor } from "./types/card";
import * as styles from "./styles";

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
      return [styles.GREY_LIGHT, styles.GREY_DARK];
    default:
      throw `No handling for color '${cardColor}'`;
  }
};
