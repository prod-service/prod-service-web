'use client'

import "./styles/globals.scss";
import MenuUpload from "./components/menu/MenuUpload";
import { useEffect, useState } from "react";
import { IMenuObj } from "./lib/menuTableParser";
import MenuFullList from "./components/menu/MenuFullList";
import { useLocalStorage } from "./hooks";
import WarningMsg from "./components/WarningMsg";
import { warningMessage } from "./consts";
import MultipleUploadFileList from "./components/MultipleFileList/MultipleUploadFileList";

const Home: React.FC = () => {
  const [showWarn, setShowWarn] = useState<boolean>(true);
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
        <MultipleUploadFileList />
        <h1 className="text-2xl text-center mb-4">Розрахунок розкладки-накладної для видачі продуктів харчування</h1>
        <section className="max-w-64 my-0 mx-auto mb-5">
          <MenuUpload inputFileName={mainMenuName} onMenuUpload={menuUploadHandler} onMenuRemove={menuRemoveHandler} />
        </section>
        
        { showWarn &&
          <section className="md:max-w-80 my-0 mx-auto mb-5">
            <WarningMsg text={ warningMessage } />
          </section>
        }

        <MenuFullList menuObject={mainMenu} />

      </main>
    </div>
  );
};

export default Home;
