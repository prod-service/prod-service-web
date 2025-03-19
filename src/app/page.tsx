'use client'

import Image from "next/image";
import "./styles/globals.scss";
import Link from "next/link";
import MenuUpload from "./components/menu/MenuUpload";
import { useState } from "react";
import { IMenuObj } from "./lib/menu-table-parser";
import MenuFullList from "./components/menu/MenuFullList";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Home: React.FC = () => {
  // const [mainMenu, setMainManu] = useState({});
  const [mainMenuName, setMainMenuName, removeMainMenuName] = useLocalStorage<string>("fileName", "");
  const [mainMenu, setMainMenu, removeMainMenu] = useLocalStorage<IMenuObj>("fullMenu", {});

  const menuUploadHandler = (menu: IMenuObj, name: string) => {
    setMainMenu(menu);
    setMainMenuName(name);
  };

  const menuRemoveHandler = () => {
    removeMainMenu();
    removeMainMenuName();
  }

  return (
    <div className="max-w-screen-xl p-2 my-0 mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="py-8">
        {/* <Image
          className="hidden md:block"
          src="/HERO-IMAGE_Hot-bar.jpg"
          alt="Main logo"
          width={180}
          height={38}
          priority
          />
          */}
        <h1 className="text-lg text-center mb-4">Розрахунок розкладки-накладної для видачі продуктів харчування</h1>
        <div className="max-w-64 my-0 mx-auto mb-5">
          <MenuUpload inputFileName={mainMenuName} onMenuUpload={menuUploadHandler} onMenuRemove={menuRemoveHandler} />
        </div>

        <MenuFullList menuObject={mainMenu} />

      </main>
    </div>
  );
};

export default Home;
