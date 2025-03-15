interface IMealDishes {
    [key: symbol]: string
}

export const mealNames = ['сніданок', 'обід', 'вечеря'];

export const breakfastDishes = Symbol('Сніданок');
export const lunchDishes = Symbol('Обід');
export const dinnerDishes = Symbol('Вечеря');

export const mealDishesSymbols: IMealDishes = {
    [breakfastDishes]: 'сніданок',
    [lunchDishes]: 'обід',
    [dinnerDishes]: 'вечеря',
};
