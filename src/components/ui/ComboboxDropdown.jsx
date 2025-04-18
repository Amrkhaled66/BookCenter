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
  name,
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
    <div className={`relative  bg-white font-cairo ${width}`}>
      <label className="text-sm font-bold text-black" htmlFor="">
        {label}
      </label>
      <Combobox name={name} value={value} onChange={onChange}>
        <div className="rounded-lg border-[1px] border-gray-color bg-white px-3 py-2 font-cairo font-semibold outline-none transition-all duration-300 ease-in-out focus-within:border-main-color">
          <ComboboxButton className="flex w-full items-center pl-2">
            <ComboboxInput
              placeholder={defaultValue}
              className="w-full overflow-hidden text-ellipsis rounded-sm outline-none placeholder:font-cairo placeholder:text-sm placeholder:font-semibold placeholder:text-black"
              displayValue={(option) => option?.toString()}
              onChange={(event) => setQuery(event.target.value)}
            />
            <IoIosArrowDown className="absolute left-3 text-lg sm:text-xl" />
          </ComboboxButton>
        </div>
        {filteredOptions.length > 0 && (
          <ComboboxOptions
            defaultValue="لا توجد بيانات"
            className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-md border bg-white drop-shadow-2xl"
          >
            {filteredOptions.map((option) => (
              <ComboboxOption
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer border-b-[1px] border-b-gray-200 p-2 px-3 ${active ? "bg-gray-200" : ""}`
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
