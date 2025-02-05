import { useState } from "react";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function ComboboxDropdown({ value, onChange, options, width }) {
  const [query, setQuery] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toString().includes(query),
  );

  return (
    <div className={`relative ${width}`}>
      <Combobox value={value} onChange={onChange}>
        <div className="relative w-full">
          <ComboboxInput
            className="w-full rounded-md border-2 border-gray-300 px-2 py-2 text-lg outline-none"
            displayValue={(option) => option?.toString()}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="absolute inset-y-0 left-2 flex items-center">
            <IoIosArrowDown className="text-2xl" />
          </ComboboxButton>
        </div>

        {filteredOptions.length > 0 && (
          <ComboboxOptions className="absolute z-50 mt-1 max-h-40 w-full overflow-y-auto rounded-md border bg-white shadow-md">
            {filteredOptions.map((option) => (
              <ComboboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer p-2 ${active ? "bg-gray-300" : ""}`
                }
              >
                {option}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </Combobox>
    </div>
  );
}
