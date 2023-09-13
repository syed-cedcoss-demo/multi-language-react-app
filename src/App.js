import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <Routes>
      <Route path="/" element={<Login t={t} i18n={i18n} />} />
      <Route path="/login" element={<Login t={t} i18n={i18n} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
