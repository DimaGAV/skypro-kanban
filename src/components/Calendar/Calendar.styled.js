import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CustomCalendar = styled(DayPicker)`
 --rdp-cell-size: 22px;
  /* Size of the day cells. */
  --rdp-caption-font-size: 14px;
  /* Font size for the caption labels. */
  --rdp-accent-color: rgb(148, 166, 190);;
  /* Accent color for the background of selected days. */
  --rdp-background-color: rgb(234, 238, 246);
  /* Background color for the hovered/focused elements. */
  --rdp-accent-color-dark: rgb(148, 166, 190);
  /* Accent color for the background of selected days (to use in dark-mode). */
  --rdp-background-color-dark: rgb(21, 20, 25);
  /* Background color for the hovered/focused elements (to use in dark-mode). */
  --rdp-outline: 2px solid var(--rdp-accent-color);
  /* Outline border for focused elements */
  --rdp-outline-selected: 3px solid var(--rdp-accent-color);
  /* Outline border for focused _and_ selected elements */
  --rdp-selected-color: #fff;
  /* Color of selected day text */

  margin: 1em;
`;
