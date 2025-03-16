interface IMealDishes {
    [key: string]: symbol
};


export const breakfast = 'сніданок';
export const lunch = 'обід';
export const dinner = 'вечеря';
export const egg = 'яйце';
export const vit = 'гексавіт';

export const mealNames = [breakfast, lunch, dinner];
export const countByItems = [egg, vit]

export const totalPerTeam = Symbol('разом на команду');
export const totalPerPerson = Symbol('разом на особу');

export const breakfastDishes = Symbol('сніданок');
export const lunchDishes = Symbol('обід');
export const dinnerDishes = Symbol('вечеря');

export const mealDishesSymbols: IMealDishes = {
    'сніданок': breakfastDishes,
    'обід': lunchDishes,
    'вечеря': dinnerDishes,
};

export const dateRegex = /\d{1,2}\.\d{1,2}\.\d{2,4}/;
