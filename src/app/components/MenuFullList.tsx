import { useEffect, useState } from "react";
import { getValueByKey, IMenuObj } from "../lib/menu-table-parser";
import MenuSingleDay from "./MenuSingleDay";

interface MenuFullListProps {
    menuObject: IMenuObj
}

const MenuFullList: React.FC<MenuFullListProps> = ({ menuObject }) => {
    const [dayList, setDayList] = useState<Array<string>>([]);
    
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
                            <MenuSingleDay dayObject={getValueByKey(day, menuObject)} />
                        </li>
                    }) }
                </ul>
            }
        </ul>
    );
}

export default MenuFullList;
