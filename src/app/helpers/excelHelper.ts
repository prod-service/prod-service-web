import * as XLSX from 'xlsx-js-style';
import { defaultFont, leftCenterAlignHV, centerAlignVH, defaultBorderStyle } from '../consts';

export const insertListIntoColumn = (worksheet: XLSX.WorkSheet, list: string[], colName: string, colStart: number): void => {
    list.forEach((item, idx) => {
        const cell = `${colName}${colStart + idx}`;
        worksheet[cell] = {
            v: item,
            s: { font: defaultFont, alignment: leftCenterAlignHV }
        }
    });
};

export const insertStaticFormattedCells = (worksheet: XLSX.WorkSheet, formattedCells: any[]) => {
    formattedCells.forEach(({ cell, value, style }) => {
        if (!worksheet[cell]) worksheet[cell] = {};
        XLSX.utils.sheet_add_aoa(worksheet, [[value]], { origin: cell, cellStyles: true });
        worksheet[cell].s = style;
    });
};

export const addDefultStyles = (worksheet: XLSX.WorkSheet, range: string): void => {
    const rangeRef = XLSX.utils.decode_range(range);
    
    for (let row = rangeRef.s.r; row <= rangeRef.e.r; row++) {
    
        for (let col = rangeRef.s.c; col <= rangeRef.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
    
            if (!worksheet[cellAddress]) worksheet[cellAddress] = { v: '' }; // Якщо комірка порожня, створюємо її
            
            worksheet[cellAddress].s = {
                ...worksheet[cellAddress].s,
                font: defaultFont, 
                alignment: centerAlignVH
            };
        }
    }
};

export const addBorderdsTable = (worksheet: XLSX.WorkSheet, range: string) => {
    const rangeRef = XLSX.utils.decode_range(range);
    
    for (let row = rangeRef.s.r; row <= rangeRef.e.r; row++) {

        for (let col = rangeRef.s.c; col <= rangeRef.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });

            if (!worksheet[cellAddress]) worksheet[cellAddress] = { v: '' }; // Якщо комірка порожня, створюємо її

            worksheet[cellAddress].s = {
                ...worksheet[cellAddress].s,
                border: {
                    top: defaultBorderStyle,
                    bottom: defaultBorderStyle,
                    left: defaultBorderStyle,
                    right: defaultBorderStyle,
                },
            };
        }
    }
};
  