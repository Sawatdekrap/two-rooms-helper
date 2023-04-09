import DraftCardItf from "../interfaces/draftCard";
import DraftErrorItf from "../interfaces/draftError";
import { DraftErrorResolutionItf } from "../interfaces/draftError";
import { CardId } from "../types/card";

const arePlayedTogether = (cardIds: CardId[], draftCards: DraftCardItf[]) => {
  const nMatchingCards = draftCards
    .filter((dc) => dc.count > 0)
    .filter((dc) => cardIds.includes(dc.card.id)).length;
  return nMatchingCards === 0 || nMatchingCards === cardIds.length;
};

const newCountSetter = (cardIds: CardId[], newCount: number) => {
  return (draftCards: DraftCardItf[]) => {
    return draftCards.map((dc) =>
      cardIds.includes(dc.card.id) ? { card: dc.card, count: newCount } : dc
    );
  }
}

const newAddRemoveResolutions = (cardIds: CardId[]): DraftErrorResolutionItf[] => {
  return [
    {
      description: "+ Add all",
      apply: newCountSetter(cardIds, 1),
    },
    {
      description: "- Remove all",
      apply: newCountSetter(cardIds, 0),
    }
  ]
}

const newPlayTogetherError = (description: string, cardIds: CardId[]): DraftErrorItf => {
  return {
    description,
    isError: (draftCards) => !arePlayedTogether(cardIds, draftCards),
    resolutions: newAddRemoveResolutions(cardIds),
  }
}

const DRAFT_ERRORS: DraftErrorItf[] = [
  newPlayTogetherError("Ahab and Moby are not being played together", [CardId.AHAB, CardId.MOBY]),
  newPlayTogetherError("Bomber and President are not being played together", [CardId.BOMBER, CardId.PRESIDENT]),
  newPlayTogetherError("Butler and Maid are not being played together", [CardId.BUTLER, CardId.MAID]),
  newPlayTogetherError("Decoy, Sniper, and Target are not being played together", [CardId.DECOY, CardId.SNIPER, CardId.TARGET]),
  newPlayTogetherError("Juliet and Romeo are not being played together", [CardId.JULIET, CardId.ROMEO]),
  newPlayTogetherError("Mistress and Wife are not being played together", [CardId.MISTRESS, CardId.WIFE]),
];

export default DRAFT_ERRORS;
