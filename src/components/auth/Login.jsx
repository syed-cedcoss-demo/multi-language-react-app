import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/Auth";
const Login = ({ t, i18n }) => {
  const navigate = useNavigate();
  return (
    <AuthLayout t={t} i18n={i18n}>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold secondary-radiant">{t("login.form.heading")}</h1>
        <form>
          <label className="block mb-3">
            <span className="block text-sm font-medium secondary-radiant">
              {t("login.form.emailLbl")}
            </span>
            <input type="text" placeholder={t("login.form.emailNpt")} className="form-input" />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium secondary-radiant">
              {t("login.form.passLbl")}
            </span>
            <input type="text" className="form-input" placeholder={t("login.form.passNpt")} />
          </label>
          <label className="block mb-3">
            <Link
              to="/forget"
              className="block text-sm font-medium text-blue-500 text-right cursor-pointer"
            >
              {t("login.form.forgetLnk")}
            </Link>
          </label>
          <hr className="mb-3" />
          <label className="block mb-3">
            <input
              type="button"
              value={t("login.form.btn")}
              onClick={() => navigate("/panel/dashboard")}
              className="btn-primary"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-500">
              {t("login.form.createInfo")}{" "}
              <Link to="/signup" className="text-blue-500 cursor-pointer">
                {t("login.form.createLnk")}
              </Link>
            </span>
          </label>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
