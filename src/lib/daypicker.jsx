// daypicker.jsx
import { DayPicker } from "react-day-picker";
// import "../App.css"
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";

export function MyDatePicker({selected, onSelect}) {
  return (
    <DayPicker
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={onSelect}
    />
  );
}
