import React from "react";

const LangSwitch = ({ i18n }) => {
  const lngs = [
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

  return (
    <div className="flex flex-row justify-center  select-none">
      <div class="flex flex-row items-center right-1 ">
        {lngs.map((lng) => {
          return (
            <button
              class="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
              key={lng?.name}
              onClick={() => i18n.changeLanguage(lng?.tag)}
            >
              <span className="text-md">{lng?.name}</span>
              <span className="ml-1">
                <img src={lng?.url} className="w-5 h-5" alt="flag" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LangSwitch;
