import { useEffect, useState } from "react";
import { IMenuObj } from "@/app/lib/menu-table-parser";
import MenuSingleDay from "./MenuSingleDay";
import Popup from "../Popup";
import { getValueByKey } from "@/app/helpers";
import MealCalcForm from "./MealForm";

interface MenuFullListProps {
    menuObject: IMenuObj
}

const MenuFullList: React.FC<MenuFullListProps> = ({ menuObject }) => {
    const [dayList, setDayList] = useState<Array<string>>([]);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);
    
    useEffect(() => {
        setDayList(Object.keys(menuObject));
    }, [menuObject])
    
    return (
        <ul>
            {dayList.length > 0 && 
                <ul className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
                    { dayList.map((day, index) => {
                        return <li key={index} className="p-2 md:p-4 mb-4 border-2">
                            <span className="font-bold">{day}</span>
                            <button onClick={openPopup} className="transition bg-indigo-500 hover:bg-indigo-400 p-1 rounded text-white">Open day</button>
                            <MenuSingleDay dayObject={getValueByKey(day, menuObject)} />
                            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                                <MealCalcForm formObjects={getValueByKey(day, menuObject)} />
                            </Popup>
                        </li>
                    }) }
                </ul>
            }
        </ul>
    );
}

export default MenuFullList;
