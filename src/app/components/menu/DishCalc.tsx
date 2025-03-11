import { getValueByKey } from "@/app/helpers";
import { IProduct } from "@/app/lib/menu-table-parser";
import { useState, useEffect } from "react";
import ProductListValues from "./ProductListValues";

interface DishCalcProps {
    dishListObj: IProduct
};

const DishCalc: React.FC<DishCalcProps> = ({ dishListObj }) => {
    const [dishList, setDishList] = useState<Array<string>>([]);

    useEffect(() => {
        if (dishListObj) setDishList(Object.keys(dishListObj));
    }, [dishListObj]);
    
    return (
        <div>
            <ul>
                { dishList.length > 0 && dishList.map((dish, idx) => {
                    return (
                        <li key={idx}>
                            {dish}
                            <ProductListValues productListObj={getValueByKey(dish, dishListObj)} />
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default DishCalc;