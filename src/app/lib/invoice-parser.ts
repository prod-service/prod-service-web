import { ICalcObj } from "./dish-calculation";

interface ISingleProductRow {
    name: string,
    perPersonBreakfast: string | number,
    perTeamBreakfast: string | number,
    perPersonLunch: string | number,
    perTeamLunch: string | number,
    perPersonDinner: string | number,
    perTeamDinner: string | number,
    perPersonTotal: string | number,
    perTeamTotal: string | number,
}

interface IInvoiceData {
    date: string,
    numberPeople: number,
    breakfastDishes: string[],
    lunchDishes: string[],
    dinnerDishes: string[],
    products: ISingleProductRow
};

// export const parseIntoInvoice = (inputData: ICalcObj, singleData: ICalcObj): IInvoiceData => {

// };