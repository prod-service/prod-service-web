import { getValueByKey } from "../helpers";
import { IMealObj, IDishObj } from "./menuTableParser";

interface ILocalMeal {
    getLocalMealObj: () => IMealObj;
    resetLocalMeal: () => void;
    setDishesByMealList: (outsideMeal: IMealObj) => void;
    setDishByMealName: (dishObj: IDishObj, mealName: string) => void;
};

let localMealObj: IMealObj = {};

export default (): ILocalMeal => {
    
    const setDishesByMealList = (outsideMeal: IMealObj): void => {
        Object.keys(outsideMeal).forEach((meal) => {
            const dish = getValueByKey(meal, outsideMeal);

            setDishByMealName(dish, meal);
        });
    };

    const setDishByMealName = (dishObj: IDishObj, mealName: string): void => {
        localMealObj = { ...localMealObj, [mealName]: dishObj };
    };

    const resetLocalMeal = () => localMealObj = {};
    
    const getLocalMealObj = () => localMealObj;
    
    
    return { getLocalMealObj, resetLocalMeal, setDishesByMealList, setDishByMealName };
};