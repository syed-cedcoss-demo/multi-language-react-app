import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useContext, useState } from "react";
import { TranslateContext } from "../../context/TranslateContext";

const people = [
  {
    nativeName: "English",
    url: "https://www.worldometers.info//img/flags/small/tn_us-flag.gif",
    name: "En",
    tag: "en",
  },
  {
    nativeName: "Deutsch",
    url: "https://www.worldometers.info//img/flags/small/tn_be-flag.gif",
    name: "De",
    tag: "de",
  },
  {
    nativeName: "Hindi",
    url: "https://www.worldometers.info//img/flags/small/tn_in-flag.gif",
    name: "Hi",
    tag: "hi",
  },
];

const LanguageChange = () => {
  const [selected, setSelected] = useState(people[0]);
  const { translation } = useContext(TranslateContext);
  const { i18n } = translation;
  return (
    <Combobox
      value={selected}
      onChange={(e) => {
        setSelected(e);
        i18n.changeLanguage(e?.tag);
      }}
    >
      <div className="relative mt-1 w-20">
        <div className="relative cursor-default overflow-hidden rounded-md bg-white text-left shadow-md sm:text-sm">
          <Combobox.Input
            className="border-none py-2 pl-2 text-sm leading-5 text-gray-900 "
            displayValue={(person) => person.name}
            disabled
          />
          {/* <img
            src={"https://www.worldometers.info//img/flags/small/tn_in-flag.gif"}
            alt=""
            sizes=""
            srcset={"https://www.worldometers.info//img/flags/small/tn_in-flag.gif"}
            className="w-5 h-5"
          /> */}
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person) => (
              <Combobox.Option
                key={person.tag}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 ${
                    active ? "bg-violet-600 text-white" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <div className="flex items-center justify-center gap-2">
                    <span className={`${selected ? "font-bold" : "font-normal"}`}>
                      {person.name}
                    </span>
                    <img
                      src={person?.url}
                      alt=""
                      sizes=""
                      srcset={person?.url}
                      className="w-5 h-5"
                    />
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
export default LanguageChange;
