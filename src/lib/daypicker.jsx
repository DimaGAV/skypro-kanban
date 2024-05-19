// daypicker.jsx
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";

export function MyDatePicker() {
  const [selected, setSelected] = useState();
  return (
    <DayPicker
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}
