import * as XLSX from 'xlsx';
import {_EXCEL_TYPE} from '../constatnts/fileTypes';

export default class ImportService {

    readFile = event => {
        return new Promise((resolve, reject) => {
            const file = event.target.files[0];
            if(file.type !== _EXCEL_TYPE) reject();
            const reader = new FileReader();
            reader.onload = event => {
                const data = this.parseExcel(event);
                resolve(data);
            };
            reader.readAsBinaryString(file)
        });
    };

    parseExcel = event => {
        const bstr  = event.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, {defval:""});
        return data;
    }

}