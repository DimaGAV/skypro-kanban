import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";
import { CustomCalendar } from "../components/Calendar/Calendar.styled";

export function MyDatePicker({ selected, onSelect }) {
  return (
    <CustomCalendar
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={onSelect}
    />
  );
}
