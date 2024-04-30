import styled from "styled-components";
import { topicStyles } from "../../lib/topic";

export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const Topic = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

  ${TopicText} {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const Group = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Btn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const BtnDiv = styled(Btn)`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
  }
`;

export const DateP = styled(Date)`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;
