import DraftCardItf from "../interfaces/draftCard";
import DraftErrorItf from "../interfaces/draftError";
import { CardId } from "../types/card";

const arePlayedTogether = (cardIds: CardId[], draftCards: DraftCardItf[]) => {
  const nMatchingCards = draftCards
    .filter((dc) => dc.count > 0)
    .filter((dc) => cardIds.includes(dc.card.id)).length;
  return nMatchingCards === 0 || nMatchingCards === cardIds.length;
};

const DRAFT_ERRORS: DraftErrorItf[] = [
  {
    description: "Ahab and Moby are not being played together",
    isError: (draftCards) => {
      return !arePlayedTogether([CardId.AHAB, CardId.MOBY], draftCards);
    },
  },
  {
    description: "Bomber and President are not being played together",
    isError: (draftCards) => {
      return !arePlayedTogether([CardId.BOMBER, CardId.PRESIDENT], draftCards);
    },
  },
  {
    description: "Butler and Maid are not being played together",
    isError: (draftCards) => {
      return !arePlayedTogether([CardId.BUTLER, CardId.MAID], draftCards);
    },
  },
  {
    description: "Decoy, Sniper, and Target are not being played together",
    isError: (draftCards) => {
      return !arePlayedTogether(
        [CardId.DECOY, CardId.SNIPER, CardId.TARGET],
        draftCards
      );
    },
  },
  {
    description: "Juliet and Romeo are not being played together",
    isError: (draftCards) => {
      return !arePlayedTogether([CardId.JULIET, CardId.ROMEO], draftCards);
    },
  },
  {
    description: "Mistress and Wife are not being played together",
    isError: (draftCards) => {
      return !arePlayedTogether([CardId.MISTRESS, CardId.WIFE], draftCards);
    },
  },
];

export default DRAFT_ERRORS;
