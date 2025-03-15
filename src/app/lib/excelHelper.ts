import * as XLSX from 'xlsx-js-style';

//export  const centerAlignV = { vertical: 'center', wrapText: true };
// const rightAlignH = { horizontal: 'right', wrapText: true };
export const defaultFont = { sz: 12, name: 'Times New Roman' };
export const lgFont = { ...defaultFont, sz: 13 };
export const smFont = { ...defaultFont, sz: 11 };
export const xsmFont = { ...defaultFont, sz: 10 };
export const centerAlignH = { horizontal: 'center', wrapText: true };
export const centerAlignVH = { vertical: 'center', horizontal: 'center', wrapText: true };
export const leftAlignH = { horizontal: 'left', wrapText: true };
export const defaultBorderStyle = { style: 'thin', color: { rgb: '000000' } };

export const addStylesToCells = (worksheet: XLSX.WorkSheet, formattedCells: any[]) => {
    formattedCells.forEach(({ cell, value, style }) => {
        if (!worksheet[cell]) worksheet[cell] = {};
        XLSX.utils.sheet_add_aoa(worksheet, [[value]], { origin: cell, cellStyles: true });
        worksheet[cell].s = style;
    });
};

export const addBorderdsTable = (worksheet: XLSX.WorkSheet, range: string) => {
    const rangeRef = XLSX.utils.decode_range(range);
    for (let row = rangeRef.s.r; row <= rangeRef.e.r; row++) {

        for (let col = rangeRef.s.c; col <= rangeRef.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });

            if (!worksheet[cellAddress]) worksheet[cellAddress] = { v: '' }; // Якщо комірка порожня, створюємо її

            worksheet[cellAddress].s = {
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
  