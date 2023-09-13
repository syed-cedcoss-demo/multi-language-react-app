import { useContext } from "react";
import { TranslateContext } from "../../context/TranslateContext";
import LanguageChange from "../shared/LanguageChange";

const Auth = ({ children }) => {
  const { translation } = useContext(TranslateContext);
  const { t, i18n } = translation;

  return (
    <div className="h-screen bg-neutral-200 bg-no-repeat">
      <div className="absolute top-0 right-0 p-3">
        <LanguageChange i18n={i18n} t={t} />
      </div>

      <div className="grid grid-flow-row grid-cols-3 min-h-full min-w-full ">
        <div className="flex flex-col items-center p-2 mt-40 col-span-3 md:col-span-1 md:mb-3">
          <div className="w-11/12 md:max-w-xs">
            <h1 className="font-extrabold text-2xl primary-radiant">{t("login.title")}</h1>
            <p className="text-lg secondary-radiant">{t("login.description")}</p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
      <div className="md:absolute p-3 bottom-0 left-0 right-0">
        <p className="text-center text-sm secondary-radiant">
          {t("footer.info")}{" "}
          <span className="text-blue-500 cursor-pointer">{t("footer.link")}</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
