import * as XLSX from 'xlsx-js-style';
import { saveAs } from 'file-saver';
import { addBorderdsTable, addStylesToCells, defaultFont, leftCenterAlignHV } from './excelHelper';
import cellsInvoiceFormat from "./cellsInvoiceFormat";
import { getMainTitleDesc } from '../dictionary';
import { IInvoiceData } from './invoice-parser';

const insertListIntoColumn = (worksheet: XLSX.WorkSheet, list: string[], colName: string, colStart: number): void => {
    list.forEach((item, idx) => {
        const cell = `${colName}${colStart + idx}`;
        // XLSX.utils.sheet_add_aoa(worksheet, [[item]], { origin: cell })
        worksheet[cell] = {
            v: item,
            s: { font: defaultFont, alignment: leftCenterAlignHV }
        }
    });
};

export const exportToExcel = (payload: IInvoiceData, filename: string = 'export.xlsx') => {
    const { date, numberPeople, breakfastDishes, lunchDishes, dinnerDishes, products } = payload;
    // const defaultTableRows = 32;
    // const shiftTableRow = products.length - defaultTableRows;
    const dishListStart = 17;
    const maxDishListLength = Math.max(breakfastDishes.length, lunchDishes.length, dinnerDishes.length);
    const dishListEnd = dishListStart + maxDishListLength;
    const tableRowStart = dishListEnd + 2 + 4;
    const tableRowEnd = tableRowStart + products.length - 2;
    const breakfastListRange = `B${dishListStart}:B${dishListEnd}`
    const lunchListRange = `D${dishListStart}:D${dishListEnd}`
    const dinnerListRange = `H${dishListStart}:H${dishListEnd}`

    const worksheet = XLSX.utils.aoa_to_sheet([[]]);


    worksheet['!cols'] = [
        { wch: 8.11 },
        { wch: 30.80 },
        { wch: 7.13 },
        { wch: 10.43 },
        { wch: 7.13 },
        { wch: 10.43 },
        { wch: 7.13 },
        { wch: 10.43 },
        { wch: 7.13 },
        { wch: 10.43 }
    ]; 
    worksheet['!rows'] = [
        { hpt: 73 },
        {},
        { hpx: 17 },
        { hpx: 17 },
        { hpx: 11 },
        { hpx: 17 },
        { hpx: 11 },
        { hpx: 14 },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}, // На обід/сніданок/вечерю [15]
        // {}, // динамічний список [16]
        // {}, // динамічний список
        // {}, // динамічний список
        // {}, // динамічний список
        // {}, // динамічний список [20]
        {},
        {},
        {}, // [23] таблиця початок
        {},
        {},
        { hpx: 101 }, 
        // {}, // table content start [27] [28 row]
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {},
        // {}, // table end [56]
        {},
        { hpx: 17 },
        { hpx: 13 },
        { hpx: 17 },
        { hpx: 13 },
        { hpx: 17 },
        { hpx: 17 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        {},
        {},
        {},
        { hpx: 60 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
        { hpx: 25 },
    ];
    worksheet['!merges'] = [
        { s: { r: 0, c: 5 }, e: { r: 0, c: 9 } }, // 1 рядок (F1), 5-й стовпець (F) до 9-го (J)
        { s: { r: 1, c: 0 }, e: { r: 1, c: 1 } },   
        { s: { r: 2, c: 5 }, e: { r: 2, c: 9 } },
        { s: { r: 3, c: 5 }, e: { r: 3, c: 9 } },
        { s: { r: 4, c: 5 }, e: { r: 4, c: 9 } },
        { s: { r: 5, c: 5 }, e: { r: 5, c: 9 } },
        { s: { r: 6, c: 5 }, e: { r: 6, c: 9 } },
        { s: { r: 7, c: 5 }, e: { r: 7, c: 9 } },
        { s: { r: 9, c: 0 }, e: { r: 9, c: 9 } },
        { s: { r: 10, c: 0 }, e: { r: 10, c: 9 } },
        { s: { r: 11, c: 0 }, e: { r: 11, c: 9 } },
        { s: { r: 12, c: 0 }, e: { r: 12, c: 9 } },
        { s: { r: 14, c: 0 }, e: { r: 14, c: 9 } },
        
        { s: { r: 15, c: 3 }, e: { r: 15, c: 5 } }, // Dishes lists title
        // Dishes lists
        // { s: { r: 16, c: 3 }, e: { r: 16, c: 5 } },
        // { s: { r: 17, c: 3 }, e: { r: 17, c: 5 } },
        // { s: { r: 18, c: 3 }, e: { r: 18, c: 5 } },
        // { s: { r: 19, c: 3 }, e: { r: 19, c: 5 } },
        // { s: { r: 20, c: 3 }, e: { r: 20, c: 5 } },

        { s: { r: 15, c: 7 }, e: { r: 15, c: 9 } }, // Dishes lists title
        // Dishes lists
        // { s: { r: 16, c: 7 }, e: { r: 16, c: 9 } },
        // { s: { r: 17, c: 7 }, e: { r: 17, c: 9 } },
        // { s: { r: 18, c: 7 }, e: { r: 18, c: 9 } },
        // { s: { r: 19, c: 7 }, e: { r: 19, c: 9 } },
        // { s: { r: 20, c: 7 }, e: { r: 20, c: 9 } },
        // Table start
        { s: { r: 23, c: 0 }, e: { r: 26, c: 0 } },
        { s: { r: 23, c: 1 }, e: { r: 26, c: 1 } },
        { s: { r: 23, c: 2 }, e: { r: 23, c: 9 } },
        { s: { r: 24, c: 2 }, e: { r: 25, c: 3 } },
        { s: { r: 24, c: 4 }, e: { r: 25, c: 5 } },
        { s: { r: 24, c: 6 }, e: { r: 25, c: 7 } },
        { s: { r: 24, c: 8 }, e: { r: 25, c: 9 } },
        // Table end
        { s: { r: 58, c: 0 }, e: { r: 58, c: 9 } },
        { s: { r: 59, c: 0 }, e: { r: 59, c: 9 } },
        { s: { r: 60, c: 0 }, e: { r: 60, c: 9 } },
        { s: { r: 61, c: 0 }, e: { r: 61, c: 9 } },
        
        { s: { r: 62, c: 0 }, e: { r: 62, c: 3 } },
        { s: { r: 62, c: 5 }, e: { r: 62, c: 9 } },
        { s: { r: 63, c: 0 }, e: { r: 63, c: 3 } },
        { s: { r: 63, c: 5 }, e: { r: 63, c: 9 } },
        { s: { r: 64, c: 1 }, e: { r: 64, c: 3 } },
        { s: { r: 64, c: 5 }, e: { r: 64, c: 9 } },
        { s: { r: 65, c: 1 }, e: { r: 65, c: 3 } },
        { s: { r: 65, c: 5 }, e: { r: 65, c: 9 } },
        { s: { r: 66, c: 1 }, e: { r: 66, c: 3 } },
        { s: { r: 66, c: 5 }, e: { r: 66, c: 9 } },
        { s: { r: 67, c: 1 }, e: { r: 67, c: 3 } },
        { s: { r: 67, c: 5 }, e: { r: 67, c: 9 } },
        { s: { r: 68, c: 1 }, e: { r: 68, c: 3 } },
        { s: { r: 68, c: 5 }, e: { r: 68, c: 9 } },
        { s: { r: 69, c: 1 }, e: { r: 69, c: 3 } },
        { s: { r: 69, c: 5 }, e: { r: 69, c: 9 } },
        { s: { r: 72, c: 1 }, e: { r: 72, c: 3 } },
        { s: { r: 72, c: 5 }, e: { r: 72, c: 9 } },
        { s: { r: 73, c: 1 }, e: { r: 73, c: 3 } },
        { s: { r: 73, c: 5 }, e: { r: 73, c: 9 } },
        { s: { r: 74, c: 1 }, e: { r: 74, c: 3 } },
        { s: { r: 74, c: 5 }, e: { r: 74, c: 9 } },
        { s: { r: 75, c: 1 }, e: { r: 75, c: 3 } },
        { s: { r: 75, c: 5 }, e: { r: 75, c: 9 } },
        { s: { r: 76, c: 1 }, e: { r: 76, c: 3 } },
        { s: { r: 76, c: 5 }, e: { r: 76, c: 9 } },
        { s: { r: 77, c: 1 }, e: { r: 77, c: 3 } },
        { s: { r: 77, c: 5 }, e: { r: 77, c: 9 } },
        { s: { r: 78, c: 1 }, e: { r: 78, c: 3 } },
        { s: { r: 78, c: 5 }, e: { r: 78, c: 9 } },
        { s: { r: 79, c: 1 }, e: { r: 79, c: 3 } },
        { s: { r: 79, c: 5 }, e: { r: 79, c: 9 } },
    ];

    for (let indexList = 0; indexList < maxDishListLength; indexList++) {
        const rowIndex = dishListStart-1+indexList;
        if (worksheet['!rows']) worksheet['!rows'].splice(rowIndex, 0, {});
        worksheet['!merges'].push(
            { s: { r: dishListStart+indexList, c: 3 }, e: { r: dishListStart+indexList, c: 5 } },
            { s: { r: dishListStart+indexList, c: 7 }, e: { r: dishListStart+indexList, c: 9 } },
        );
    }

    insertListIntoColumn(worksheet, breakfastDishes, 'B', dishListStart+1);
    insertListIntoColumn(worksheet, lunchDishes, 'D', dishListStart+1);
    insertListIntoColumn(worksheet, dinnerDishes, 'H', dishListStart+1);

    // Set rows for main table
    products.forEach((p, idx) => {
        if (worksheet['!rows']) worksheet['!rows'].splice(tableRowStart+idx, 0, {});
    });


    XLSX.utils.sheet_add_aoa(worksheet, [[getMainTitleDesc(numberPeople)]], { origin: 'A13' }); // dynamic cell
    
    // Data insert
    XLSX.utils.sheet_add_json(worksheet, products, { skipHeader: true, origin: `B${tableRowStart}` });
    
    // find last row and col
    const lastRow = tableRowEnd;
    const lastCol = Object.keys(products[0]).length - 1;
    const range = `A${tableRowStart-3}:${XLSX.utils.encode_col(lastCol+1)}${lastRow}`;

    // boreders for table
    addBorderdsTable(worksheet, range);

    addStylesToCells(worksheet, cellsInvoiceFormat);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // file gen
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true });

    const fileData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(fileData, filename);
};
