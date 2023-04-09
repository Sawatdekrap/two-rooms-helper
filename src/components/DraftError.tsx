import React from "react";
import styled from "styled-components";
import DraftCardItf from "../interfaces/draftCard";
import DraftErrorItf from "../interfaces/draftError";
import { RED_DARK, RED_LIGHT } from "../styles";

const DraftErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${RED_DARK};
  color: white;
  padding: 4px 16px;
  border-radius: 8px;
  margin: 4px 0;
`;

const DraftErrorDescription = styled.div``;

const QuickFixWrapper = styled.div`
  margin-top: 4px;
`;

const QuickFix = styled.button`
  height: 100%;
  border: none;
  background-color: ${RED_LIGHT};
  color: white;
  margin: 0 8px;
  font-weight: bold;

  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

interface DraftErrorProps {
  draftError: DraftErrorItf;
  draftCards: DraftCardItf[];
  setDraftCards: (newDraftCards: DraftCardItf[]) => void;
}

const DraftError = ({
  draftError,
  draftCards,
  setDraftCards,
}: DraftErrorProps) => {
  return (
    <DraftErrorWrapper>
      <DraftErrorDescription>{draftError.description}</DraftErrorDescription>
      {draftError.resolutions && (
        <QuickFixWrapper>
          {draftError.resolutions.map((resolution) => {
            const applyResolution = () => {
              const newDraftCards = resolution.apply(draftCards);
              setDraftCards([...newDraftCards]);

              const newDraftCardIds = newDraftCards
                .filter((dc) => dc.count > 0)
                .map((dc) => dc.card.id);
              console.log(`New draft cards: ${newDraftCardIds}`);
            };

            return (
              <QuickFix key={resolution.description} onClick={applyResolution}>
                {resolution.description}
              </QuickFix>
            );
          })}
        </QuickFixWrapper>
      )}
    </DraftErrorWrapper>
  );
};

export default DraftError;
