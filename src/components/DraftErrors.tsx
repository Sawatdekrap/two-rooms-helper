import React, { useMemo } from "react";
import DraftCardItf from "../interfaces/draftCard";
import DRAFT_ERRORS from "../constants/draftErrors";
import styled from "styled-components";
import DraftErrorItf from "../interfaces/draftError";
import DraftError from "./DraftError";
import { FONT_TITLE } from "../styles";

const DraftErrorsTitle = styled.div`
  font-family: ${FONT_TITLE};
  font-size: 32px;
  text-align: left;
`;

const DraftErrorsWrapper = styled.div``;

interface DraftErrorsProps {
  draftCards: DraftCardItf[];
}

const DraftErrors = ({ draftCards }: DraftErrorsProps) => {
  const activeErrors = useMemo<DraftErrorItf[]>(() => {
    return DRAFT_ERRORS.filter((de) => de.isError(draftCards));
  }, [draftCards]);

  return (
    <DraftErrorsWrapper>
      <DraftErrorsTitle>Errors</DraftErrorsTitle>
      {activeErrors.map((draftError) => (
        <DraftError key={draftError.description} draftError={draftError} />
      ))}
    </DraftErrorsWrapper>
  );
};

export default DraftErrors;
