import { useState } from "react";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

import InputError from "./InputError";

export default function ComboboxDropdown({
  onChange,
  options,
  width,
  value,
  label,
  error,
  defaultValue,
}) {
  const [query, setQuery] = useState("");

  const filteredOptions =
    Array.isArray(options) &&
    options.filter((option) =>
      option
        .toString()
        .toLowerCase()
        .replace(" ", "")
        .includes(query.toLowerCase().replace(" ", "")),
    );

  return (
    <div className={`relative space-y-2 font-cairo ${width}`}>
      <label className="text-sm font-bold text-black" htmlFor="">
        {label}
      </label>
      <Combobox value={value} onChange={onChange}>
        <div className="rounded-lg border-2 border-gray-color bg-white px-3 py-2 font-cairo font-semibold outline-none ring-main-color transition-all duration-300 ease-in-out focus-within:ring-[1px]">
          <ComboboxButton className="flex w-full items-center pl-2">
            <ComboboxInput
              placeholder={defaultValue}
              className="w-full overflow-hidden text-ellipsis rounded-md outline-none placeholder:font-cairo placeholder:text-base placeholder:font-semibold placeholder:text-black"
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
        {error && <InputError error={error} />}
      </Combobox>
    </div>
  );
}
