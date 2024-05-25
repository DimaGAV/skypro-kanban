import styled from "styled-components";
import { topicStyles } from "../lib/topic";
import { hover01, hover03, subttl } from "./common";

export const ModalMain = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const CardMain = styled(ModalMain)`
  z-index: 6;
`;
export const ExitMain = styled(ModalMain)`
  z-index: 5;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const CardTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const Close = styled.p`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  resize: none;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    padding: 10px 0;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    padding: 9px 0;
  }
`;

export const FormBrowseArea = styled(FormArea)`
  background: ${(props) => (props.isEditing ? "#ffffff" : "#eaeef6")};
`;

export const CreateBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${hover01}
`;

export const CardCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;

  ${subttl}
`;

export const SelectedDate = styled.p`
  color: rgb(148, 166, 190);
  margin-top: 6px;
  padding-left: 6px;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`;

export const SelectedDateSpan = styled.span`
  color: #000;
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesTtl = styled.p`
  margin-bottom: 14px;
  ${subttl}
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesThemeP = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0.4")};
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

  ${CategoriesThemeP} {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  }
`;

export const BrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusPTtl = styled.p`
  margin-bottom: 14px;
  ${subttl}
`;
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  display: ${(props) => (props.isEditing ? "block" : "none")};
  background-color: ${(props) => (props.isActive ? "#94A6BE" : "#fff")};

  & p {
    color: ${(props) => (props.isActive ? "#fff" : "#94a6be")};
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
export const CurrentStatus = styled(StatusTheme)`
  background-color: #94a6be;
  display: ${(props) => (props.isEditing ? "inline-block" : "none")};
  & p {
    color: #fff;
  }
`;

export const BrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BrowseButtonsGroup = styled.div`
  margin-right: 8px;
  display: ${(props) => (props.isEditing ? "block" : "none")};
`;

export const BrowseButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`;
export const BrowseButtonBor = styled(BrowseButton)`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  margin-right: 8px;
  background: transparent;
  font-family: "Roboto";
  color: #565eef;

  ${hover03}
`;

export const BrowseButtonBg = styled(BrowseButton)`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  ${hover01}
`;
