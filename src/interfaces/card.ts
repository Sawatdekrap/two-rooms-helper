import { CardColor, CardType, CardId } from "../types/card";

export default interface CardItf {
  id: CardId;
  color: CardColor;
  type: CardType;
  min?: number;
  max?: number;
}
