import { useState } from "react";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function ComboboxDropdown({
  value,
  onChange,
  options,
  width,
  defaultValue,
}) {
  const [query, setQuery] = useState("");

  const filteredOptions = options.filter((option) =>
    option
      .toString()
      .toLowerCase()
      .replace(" ", "")
      .includes(query.toLowerCase().replace(" ", "")),
  );

  return (
    <div className={`relative font-Poppins ${width}`}>
      <Combobox value={value} onChange={onChange}>
        <div className="relative flex w-full border-2 border-gray-300 p-2 focus-within:border-third-color transition-all duration-300 ">
          <ComboboxButton className="flex w-full items-center pl-2">
            <ComboboxInput
              placeholder={defaultValue}
              className="w-full overflow-hidden text-ellipsis rounded-md text-sm outline-none placeholder:font-cairo placeholder:text-base placeholder:font-semibold placeholder:text-black"
              displayValue={(option) => option?.toString()}
              onChange={(event) => setQuery(event.target.value)}
            />
            <IoIosArrowDown className="absolute left-3 text-lg sm:text-xl" />
          </ComboboxButton>
        </div>

        {filteredOptions.length > 0 && (
          <ComboboxOptions className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-md border bg-white shadow-md">
            {filteredOptions.map((option) => (
              <ComboboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer p-2 ${active ? "bg-black text-white" : ""}`
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
