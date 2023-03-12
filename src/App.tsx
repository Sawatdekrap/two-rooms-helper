import React, { useState } from "react";
import styled from "styled-components";
import DraftPage from "./pages/DraftPage";
import Menu from "./pages/Menu";
import { Page } from "./constants/pages";

const AppContainer = styled.div``;

function App() {
  const [page, setPage] = useState<Page>(Page.MENU);

  let pageContent;
  switch (page) {
    case Page.MENU:
      pageContent = <Menu setPage={setPage} />;
      break;
    case Page.DRAFT:
      pageContent = <DraftPage />;
      break;
    default:
      pageContent = <></>;
      break;
  }

  return <AppContainer>{pageContent}</AppContainer>;
}

export default App;
