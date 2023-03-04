import exp from "constants";
import React, { useState } from "react";
import styled from "styled-components";

const ShelfTitle = styled.div`
  margin-bottom: 8px;

  :hover {
    cursor: pointer;
  }
`;

const ShelfContent = styled.div`
  flex: auto;
  width: 220px;

  overflow-y: scroll;
`;

const ShelfContainer = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: -5px 0 15px 1px #ededed;

  ${ShelfTitle} {
    flex: ${(props) => (props.expanded ? 0 : "auto")};
    writing-mode: ${(props) =>
      props.expanded ? "horizontal-tb" : "vertical-lr"};
  }
`;

const ShelfFallback = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-style: italic;
`;

interface ShelfProps {
  title: string;
  children?: React.ReactNode;
  fallbackText?: string;
}

const Shelf = ({ title, children, fallbackText }: ShelfProps) => {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = React.Children.count(children);

  return (
    <ShelfContainer expanded={expanded}>
      <ShelfTitle
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {title}
      </ShelfTitle>
      {expanded && (
        <ShelfContent>
          {hasChildren ? (
            children
          ) : (
            <ShelfFallback>{fallbackText}</ShelfFallback>
          )}
        </ShelfContent>
      )}
    </ShelfContainer>
  );
};

export default Shelf;
