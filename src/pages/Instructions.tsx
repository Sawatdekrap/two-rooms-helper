import React from "react";
import styled from "styled-components";
import {
  PageWrapper,
  Header,
  Body,
  Footer,
  Title,
} from "../components/PageElements";

const InstructionsWrapper = styled.div`
  max-width: 480px;
  margin: 48px auto;
  font-size: 14px;
`;

const InstructionsPage = () => {
  return (
    <PageWrapper>
      <Header>
        <Title>Instructions</Title>
      </Header>
      <Body>
        <InstructionsWrapper>
          <p>
            In <i>Two Rooms and a Boom</i> there are{" "}
            <strong>2 teams and 2 rooms</strong>. The 2 teams are the Blue Team
            and the Red Team. The Blue Team has a President. The Red Team has a
            Bomber. Players are first equally distributed between 2 separate
            playing areas (usually 2 separate rooms) and then each player is
            randomly dealt a facedown character card.
          </p>
          <p>
            Players play the game by saying what they want in order to select a
            leader for their room. The leader chooses <strong>hostages</strong>{" "}
            (players who will be sent to the other room{" "}
            <strong>at the end of the round</strong>)
          </p>
          <p>
            . The game consists of <strong>3 timed rounds</strong> . Each round
            is shorter than the previous round. At the end of each round, the
            hostages selected by the leaders will be <strong>traded</strong>{" "}
            into opposing rooms.
          </p>
          <p>
            <strong>The game ends after the last hostage exchange.</strong>
          </p>
          <p>
            Everyone reveals their card. If Red Team’s Bomber is in the same
            room as the President, then the Red Team wins. Otherwise the Blue
            Team wins.
          </p>
        </InstructionsWrapper>
      </Body>
      <Footer></Footer>
    </PageWrapper>
  );
};

export default InstructionsPage;
