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
        <div className="relative flex w-full border-2 border-gray-300">
          <ComboboxInput
            className="w-full overflow-hidden text-ellipsis rounded-md px-2 py-2 text-sm outline-none sm:text-lg"
            displayValue={(option) => option?.toString()}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="flex items-center pl-2">
            <IoIosArrowDown className="text-lg sm:text-xl" />
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
