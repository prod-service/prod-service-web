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

export const warningMessage: string = `Увага! Перед загрузкою розкладки, очистіть клітинки які містять прізвища, посади і звання всіх відповідальних осіб. Також очистіть шапку із затвердженням командира в/ч.`;

// Excel's
export const defaultFontName = 'Times New Roman';
export const defaultFont = { sz: 12, name: defaultFontName };
export const lgFont = { ...defaultFont, sz: 13 };
export const smFont = { ...defaultFont, sz: 11 };
export const xsmFont = { ...defaultFont, sz: 10 };
export const centerAlignH = { horizontal: 'center', wrapText: true };
export const centerAlignVH = { vertical: 'center', horizontal: 'center', wrapText: true };
export const leftAlignH = { horizontal: 'left', wrapText: true };
export const leftCenterAlignHV = { horizontal: 'left', vertical: 'center', wrapText: true };
export const defaultBorderStyle = { style: 'thin', color: { rgb: '000000' } };

// For excel parsed JSON
export const productCol = '__EMPTY_1';
export const productValueCol = '__EMPTY_8';