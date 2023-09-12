import { useTranslation } from "react-i18next";
import "./App.css";
import Team from "./components/teams/Team";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <Team t={t} i18n={i18n} />
    </div>
  );
}

export default App;
