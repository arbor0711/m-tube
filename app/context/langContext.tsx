import { useState, createContext, useContext } from "react";

interface LangContextType {
  lang: "farsi" | "english" | "deutsche";
  setLang: (lang: string) => void;
}

const defaultState: LangContextType = {
  lang: "farsi",
  setLang: (lang: string) => {},
};

const LangContext = createContext(defaultState);

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState("farsi");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

const useLang = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within LangProvider");
  }
  return context;
};

export default LangContext;
export { LangProvider, useLang };
