import styled from "styled-components";
import { breakpoints } from "../lib/breakpoints";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;

export const Form = styled.form`
position: absolute;
width: 368px;
height: 345px;
left: 536px;
top: 277px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
padding: 50px 60px 50px 60px;
box-sizing: border-box;
border: 0.7px solid rgb(212, 219, 229);
border-radius: 10px;
box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
background: rgb(255, 255, 255);
`