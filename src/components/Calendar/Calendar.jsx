import { MyDatePicker } from "../../lib/daypicker";

const Calendar = ({ selected, setSelected }) => {
  return <MyDatePicker selected={selected} onSelect={setSelected} />;
};

export default Calendar;
