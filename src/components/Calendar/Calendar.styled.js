import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const CustomCalendar = styled(DayPicker)`
  --rdp-cell-size: 28px;
  --rdp-caption-font-size: 14px;
  --rdp-accent-color: #94a6be;
  --rdp-background-color: #eaeef6;
  --rdp-accent-color-dark: #94a6be;
  --rdp-background-color-dark: rgb(21, 20, 25);
  --rdp-outline: 2px solid var(--rdp-accent-color);
  --rdp-outline-selected: 3px solid var(--rdp-accent-color);
  --rdp-selected-color: #fff;
  color: rgb(148, 166, 190);
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  .rdp-caption {
    height: 25px;
  }
  .rdp-head_cell {
    letter-spacing: 1px;
  }
  margin: 0;

  @media screen and (max-width: ${breakpoints.lg}px) {
    --rdp-cell-size: 42px;
    font-size: 14px;
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .rdp-cell {
      padding: 4px;
    }
  }
`;
