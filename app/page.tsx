"use client";

import { LangProvider } from "@/app/context/langContext";
import SelectLang from "./components/SelectLang";

export default function Home() {
  return (
    <LangProvider>
      <div className="p-10 ">
        <SelectLang />
        <h1 className="text-4xl text-center mt-24">Hello, World!</h1>
      </div>
    </LangProvider>
  );
}
