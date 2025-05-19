import { useState } from "react";
import { AccountService } from "../services/AccountService";
import { ISignInDtoRequest } from "../interface/ISignInDtoRequest";
import { LocalStorage } from "../utils/localstorage";
import { useAuthStore } from "../store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import AqylappsBlueLogo from "../assets/images/AqylappsLogoBlue.png";
import { useTranslation } from "react-i18next";
import { UseLangChange } from "../store/UseLangChange";
import i18n from "../locales/i18n";

const SignInPage = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const language = UseLangChange((state) => state.language);
  const setLanguage = UseLangChange((state) => state.setLanguage);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Trying to create a request");
      const request: ISignInDtoRequest = {
        email: email,
        password: password,
      };
      const { data } = await AccountService.getToken(request);
      console.log("data provided");
      LocalStorage.setAccessToken(data.access);
      LocalStorage.setRefreshToken(data.refresh);
      console.log(data.access);
      login();
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    console.log(lang);
    setLanguage(lang.toLowerCase());
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-y-6 w-[450px] border border-[#220154] p-15 rounded-[50px] relative"
      >
        <select
          onChange={handleLangChange}
          value={language}
          className="w-fit  py-1 px-3 absolute rounded-lg flex top-5 right-7 bg-[#3B4A97] text-white items-center "
        >
          <option value="ru">RU</option>
          <option value="kz">KZ</option>
          <option value="en">EN</option>
        </select>

        <div className="flex flex-col items-center">
          <img
            src={AqylappsBlueLogo}
            alt="Aqylapps logo"
            className="w-[200px]"
          />
          <h1 className="font-semibold text-[18px]">
            {t("SignIn.log_in_profile")}
          </h1>
        </div>

        <div>
          <input
            className="border border-[#220154] rounded-2xl p-2 w-full"
            value={email}
            type="text"
            placeholder={t("SignIn.emailInput_placeholder")}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <input
            className="border border-[#220154] rounded-2xl p-2 w-full"
            value={password}
            type="text"
            placeholder={t("SignIn.passwordInput_placeholder")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-[#220154] border-b w-fit text-[15px]">
            {t("SignIn.forget_password")}
          </p>
        </div>

        <button
          type="submit"
          className="border rounded-lg p-2 w-full bg-[#3B4A97] text-white cursor-pointer"
        >
          {t("SignIn.login_button")}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;

{
  /* <div className="cursor-pointer absolute flex flex-row top-5 right-7 gap-2 bg-[#3B4A97] px-2 py-1 items-center rounded-lg">
          <p className="text-white ">RU</p>
          <DropdownIcon />
        </div> 
        
        instead of select element
        */
}
