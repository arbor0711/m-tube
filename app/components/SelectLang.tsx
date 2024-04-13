import React from "react";
import { useLang } from "../context/langContext";
const SelectLang = () => {
  const { lang, setLang } = useLang();
  console.log(lang);
  return (
    <select
      className="bg-black"
      name="lang"
      onChange={(e) => setLang(e.target.value)}
    >
      <option value="farsi">Farsi</option>
      <option value="english">English</option>
      <option value="deutsche">Deutsche</option>
    </select>
  );
};

export default SelectLang;
