import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
// create context
const TranslateContext = createContext();

const TranslateContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [translation, setTranslation] = useState({ t, i18n });

  return (
    // the Provider gives access to the context to its children
    <TranslateContext.Provider value={{ translation, setTranslation }}>
      {children}
    </TranslateContext.Provider>
  );
};

export { TranslateContext, TranslateContextProvider };
