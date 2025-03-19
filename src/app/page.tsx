'use client'

import "./styles/globals.scss";
import MenuUpload from "./components/menu/MenuUpload";
import { useEffect, useState } from "react";
import { IMenuObj } from "./lib/menu-table-parser";
import MenuFullList from "./components/menu/MenuFullList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import WarningMsg from "./components/WarningMsg";

const Home: React.FC = () => {
  const [showWarn, setShowWarn] = useState(true);
  const [mainMenuName, setMainMenuName, removeMainMenuName] = useLocalStorage<string>("fileName", "");
  const [mainMenu, setMainMenu, removeMainMenu] = useLocalStorage<IMenuObj>("fullMenu", {});

  const menuUploadHandler = (menu: IMenuObj, name: string) => {
    setMainMenu(menu);
    setMainMenuName(name);
  };

  const menuRemoveHandler = () => {
    removeMainMenu();
    removeMainMenuName();
  };

  const warningMessage: string = `Увага! Перед загрузкою розкладки, очистіть клітинки які містять прізвища, посади і звання всіх відповідальних осіб. Також очистіть шапку із затвердженням командира в/ч.`;

  useEffect(() => {
    setShowWarn(!mainMenuName.length);
  }, [mainMenuName])

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
        <h1 className="text-2xl text-center mb-4">Розрахунок розкладки-накладної для видачі продуктів харчування</h1>
        <div className="max-w-64 my-0 mx-auto mb-5">
          <MenuUpload inputFileName={mainMenuName} onMenuUpload={menuUploadHandler} onMenuRemove={menuRemoveHandler} />
        </div>
        
        <div className="md:max-w-80 my-0 mx-auto mb-5">
          { showWarn && <WarningMsg text={ warningMessage } /> }
        </div>

        <MenuFullList menuObject={mainMenu} />

      </main>
    </div>
  );
};

export default Home;
