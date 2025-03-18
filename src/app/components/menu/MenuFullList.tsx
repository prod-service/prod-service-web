import { useEffect, useState } from "react";
import { IMenuObj } from "@/app/lib/menu-table-parser";
import MenuSingleDay from "./MenuSingleDay";
import Popup from "../Popup";
import { getValueByKey } from "@/app/helpers";
import MealCalcForm from "./MealForm";

interface MenuFullListProps {
    menuObject: IMenuObj
};

interface IDayListItem {
    name: string,
    popupOpened: boolean,
}

const MenuFullList: React.FC<MenuFullListProps> = ({ menuObject }) => {
    const [dayList, setDayList] = useState<Array<IDayListItem>>([]);

    const togglePopup = (index: number, flag: boolean) => {
        setDayList((prevValue) => {
            prevValue[index].popupOpened = flag;
            return [...prevValue]
        });
    };
    
    useEffect(() => {
        setDayList(Object.keys(menuObject).map(d => ({ name: d, popupOpened: false })));
    }, [menuObject])
    
    return (
        <ul>
            {dayList.length > 0 && 
                <ul className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                    { dayList.map(({ name, popupOpened }, index) => {
                        return <li key={index} className="p-2 md:p-4 mb-4 border-2">
                            <span className="font-bold">{name}</span>
                            <button onClick={() => togglePopup(index, true)} className="transition bg-indigo-500 hover:bg-indigo-400 p-1 rounded text-white">Open day</button>
                            <MenuSingleDay dayObject={getValueByKey(name, menuObject)} />
                            <Popup key={index} isOpen={popupOpened} onClose={() => togglePopup(index, false)}>
                                <MealCalcForm dayTitle={name} originFormObj={getValueByKey(name, menuObject)} />
                            </Popup>
                        </li>
                    }) }
                </ul>
            }
        </ul>
    );
}

export default MenuFullList;
