import React, { useMemo, useState } from "react";
import DraftCardItf from "../interfaces/draftCard";
import DRAFT_ERRORS from "../constants/draftErrors";
import styled from "styled-components";
import DraftErrorItf from "../interfaces/draftError";
import DraftError from "./DraftError";
import { FONT_TITLE, GREY_LIGHT, RED_LIGHT } from "../styles";

const DraftErrorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorIconWrapper = styled.div``;

const ErrorIcon = styled.button`
  width: 64px;
  height: 64px;
  margin: 4px;
  border-radius: 50%;
  background-color: ${RED_LIGHT};
  color: white;
  line-height: 1;
  font-family: ${FONT_TITLE};
  font-size: 56px;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

const ErrorCountWrapper = styled.div`
  position: absolute;
`;

const ErrorCountIcon = styled.div`
  position: absolute;
  left: 48px;
  width: 20px;
  height: 20px;
  background-color: ${GREY_LIGHT};
  border-radius: 50%;
  color: white;
`;

interface DraftErrorsProps {
  draftCards: DraftCardItf[];
  setDraftCards: (newDraftCards: DraftCardItf[]) => void;
}

const DraftErrors = ({ draftCards, setDraftCards }: DraftErrorsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const activeErrors = useMemo<DraftErrorItf[]>(() => {
    return DRAFT_ERRORS.filter((de) => de.isError(draftCards));
  }, [draftCards]);

  const nErrors = activeErrors.length;
  if (nErrors === 0) return null;

  return (
    <DraftErrorsWrapper>
      <ErrorIconWrapper>
        <ErrorCountWrapper>
          <ErrorCountIcon>{nErrors}</ErrorCountIcon>
        </ErrorCountWrapper>
        <ErrorIcon onClick={() => setIsExpanded(!isExpanded)}>!</ErrorIcon>
      </ErrorIconWrapper>

      {isExpanded &&
        activeErrors.map((draftError) => (
          <DraftError
            key={draftError.description}
            draftError={draftError}
            draftCards={draftCards}
            setDraftCards={setDraftCards}
          />
        ))}
    </DraftErrorsWrapper>
  );
};

export default DraftErrors;
