import PropTypes from "prop-types";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { days, months, years } from "src/utils/dateConstants";

export default function DateSelector({ selectedDate, onDateChange }) {
  return (
    <div className="flex gap-x-6 w-full md:w-[65%] justify-between">
      <ComboboxDropdown
        value={selectedDate.day}
        onChange={(day) => onDateChange({ ...selectedDate, day })}
        options={days}
        width="w-1/3"
      />
      <ComboboxDropdown
        value={selectedDate.month}
        onChange={(month) => onDateChange({ ...selectedDate, month })}
        options={months}
        width="w-1/3"
      />
      <ComboboxDropdown
        value={selectedDate.year}
        onChange={(year) => onDateChange({ ...selectedDate, year })}
        options={years}
        width="w-1/3"
      />
    </div>
  );
}
