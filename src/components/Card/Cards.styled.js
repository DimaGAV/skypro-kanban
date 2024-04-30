import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const Item = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;
