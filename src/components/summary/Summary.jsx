import React from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/images/summaryimg.jpg";
import { SummaryInfoCard } from "./SummaryInfoCard";

export const Summary = () => {
  return (
    <Container>
      <StyledImage src={BackgroundImg} alt="summary" />
      <SummaryInfoCard />
    </Container>
  );
};

const Container = styled.div`
  height: 527px;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 432px;
`;
