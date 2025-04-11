import { utils, write } from "xlsx-js-style";
import { saveAs } from 'file-saver';

export const useExportExcel = () => {
    const createExcelFile = (data: any): any => {
        const max_width = data.reduce((w: any, r: any) => Math.max(w, r.name.length), 10);
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        worksheet["!cols"] = [ { wch: max_width } ];
        utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        return write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true });
    };

    const downloadExcelFile = (data: any, fileName: string): void => {
        const defaultFileName = fileName.length ? fileName : 'invoices-calc';
        const fileData = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        saveAs(fileData, `${defaultFileName}.xlsx`);
    };


    return {
        createExcelFile,
        downloadExcelFile
    };
};