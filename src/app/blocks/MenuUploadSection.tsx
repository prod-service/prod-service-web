import { useEffect, useState } from "react";
import MenuUpload from "../components/menu/MenuUpload";
import { useLocalStorage } from "../hooks";
import { IMenuObj } from "../lib/menuTableParser";
import WarningMsg from "../components/WarningMsg";
import { warningMessage } from "../consts";
import MenuFullList from "../components/menu/MenuFullList";

const MenyUploadSection = () => {
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
        <section>
            <h1 className="text-2xl text-center mb-4">Розрахунок розкладки-накладної для видачі продуктів харчування.</h1>

            <div className="max-w-64 my-0 mx-auto mb-5">
                <MenuUpload inputFileName={mainMenuName} onMenuUpload={menuUploadHandler} onMenuRemove={menuRemoveHandler} />
            </div>

            { showWarn &&
            <div className="md:max-w-80 my-0 mx-auto mb-5">
                <WarningMsg text={ warningMessage } />
            </div>
            }

            <MenuFullList menuObject={mainMenu} />
        </section>
    );
};

export default MenyUploadSection;