import React from "react";
import styled from "styled-components";
import DraftErrorItf from "../interfaces/draftError";
import { FONT_TITLE, RED_DARK, RED_LIGHT } from "../styles";

const DraftErrorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ErrorIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: 4px;
  border-radius: 50%;
  background-color: ${RED_LIGHT};
  color: white;
  line-height: 1.5;
  font-family: ${FONT_TITLE};
`;

const DraftErrorDescription = styled.div`
  flex: auto;
  text-align: left;
`;

interface DraftErrorProps {
  draftError: DraftErrorItf;
}

const DraftError = ({ draftError }: DraftErrorProps) => {
  return (
    <DraftErrorWrapper>
      <ErrorIcon>!</ErrorIcon>
      <DraftErrorDescription>{draftError.description}</DraftErrorDescription>
    </DraftErrorWrapper>
  );
};

export default DraftError;
