import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const Block = styled(Main)`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const Content = styled(Main)`
  width: 100%;
  display: flex;

  @media screen and (max-width: ${breakpoints.xl}px) {
    display: block;
  }
`;

export const Column = styled(Main)`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: ${breakpoints.xl}px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;
