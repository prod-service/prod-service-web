'use client'

import { useEffect, useState } from "react";
import { getValueByKey } from "@/app/helpers";

interface ManuSingleDayProps {
    dayObject: object
};

const MenuSingleDay: React.FC<ManuSingleDayProps> = ({ dayObject }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);

    const getDishList = (mealName: string): Array<string> => {
        if (!mealName || !dayObject) return [''];

        return Object.keys(getValueByKey(mealName, dayObject));
    };
        
    useEffect(() => {
        if (dayObject) setMealList(Object.keys(dayObject));
    }, [dayObject]);
    return (
        <div>
            {mealList.length > 0 && 
                <ul>
                    { mealList.map((day, index) => {
                        return <li key={index}>
                            <span>{day}</span>
                            <ul className="ml-5 md:ml-8">
                                {day.length > 0 && getDishList(day).map((dish, dishIndex) => {
                                    return (
                                        <li key={dishIndex}>{dish}</li>
                                    );
                                })}
                            </ul>

                            
                        </li>
                    }) }
                </ul>
            }
        </div>
    );
};

export default MenuSingleDay;