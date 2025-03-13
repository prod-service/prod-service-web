import * as XLSX from 'xlsx-js-style';
import { saveAs } from 'file-saver';
import { appendTitle, formatTitle } from '../dictionary';

export const exportToExcel = (headerText: string, data: any[], filename: string = 'export.xlsx') => {
    const defaultFont = { sz: 12, name: 'Times New Roman' };
    // Створюємо аркуш
    const worksheet = XLSX.utils.aoa_to_sheet([[]]); // Порожній аркуш для редагування

    // Об'єднуємо клітинки F1:L2
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
        { s: { r: 15, c: 3 }, e: { r: 15, c: 5 } },
        { s: { r: 16, c: 3 }, e: { r: 16, c: 5 } },
        { s: { r: 17, c: 3 }, e: { r: 17, c: 5 } },
        { s: { r: 18, c: 3 }, e: { r: 18, c: 5 } },
        { s: { r: 19, c: 3 }, e: { r: 19, c: 5 } },
        { s: { r: 20, c: 3 }, e: { r: 20, c: 5 } },
        { s: { r: 15, c: 7 }, e: { r: 15, c: 9 } },
        { s: { r: 16, c: 7 }, e: { r: 16, c: 9 } },
        { s: { r: 17, c: 7 }, e: { r: 17, c: 9 } },
        { s: { r: 18, c: 7 }, e: { r: 18, c: 9 } },
        { s: { r: 19, c: 7 }, e: { r: 19, c: 9 } },
        { s: { r: 20, c: 7 }, e: { r: 20, c: 9 } },
        { s: { r: 23, c: 2 }, e: { r: 23, c: 9 } },
        { s: { r: 24, c: 2 }, e: { r: 25, c: 3 } },
        { s: { r: 24, c: 4 }, e: { r: 25, c: 5 } },
        { s: { r: 24, c: 6 }, e: { r: 25, c: 7 } },
        { s: { r: 24, c: 8 }, e: { r: 25, c: 9 } },
        { s: { r: 57, c: 0 }, e: { r: 57, c: 9 } },
        { s: { r: 58, c: 0 }, e: { r: 58, c: 9 } },
        { s: { r: 59, c: 0 }, e: { r: 59, c: 9 } },
        { s: { r: 60, c: 0 }, e: { r: 60, c: 9 } },
        { s: { r: 61, c: 0 }, e: { r: 61, c: 1 } },

        { s: { r: 62, c: 0 }, e: { r: 62, c: 3 } },
        { s: { r: 62, c: 5 }, e: { r: 62, c: 9 } },
        { s: { r: 63, c: 1 }, e: { r: 63, c: 3 } },
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

        { s: { r: 72, c: 0 }, e: { r: 72, c: 3 } },
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
    ];

    // Вставляємо шапку додаток
    XLSX.utils.sheet_add_aoa(worksheet, [[appendTitle]], { origin: 'F1' });
    // Формат
    XLSX.utils.sheet_add_aoa(worksheet, [[formatTitle]], { origin: 'A2' });
    
    if (!worksheet['F1']) worksheet['F1'] = {};
    worksheet['F1'].s = { alignment: { wrapText: true }, font: defaultFont };
    worksheet['A2'].s = { font: defaultFont };
    

    worksheet['!rows'] = [{}, { hpx: 73 }]; // Пропускаємо 1-й рядок, задаємо 73px для 2-го
    worksheet['!cols'] = [{ wpx: 80 }, { wpx: 282 }]; // 



    // Додаємо таблицю з 4-го рядка (щоб після заголовка був відступ)
    XLSX.utils.sheet_add_json(worksheet, data, { origin: 'A4' });

    // Створюємо книгу Excel
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Генеруємо Excel-файл
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true });

    // Збереження файлу
    const fileData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(fileData, filename);
};
