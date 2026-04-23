import fs from 'fs';
import { parse } from 'csv-parse/sync'; //prerequisit npm install csv-parse

export class DataProvidersUtils {
    static getDataFromJSON(filePath: string) {
        const data: any = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return data;
    }

    static getDataFromCSV(filePath: string) {
        const data: any = parse(fs.readFileSync(filePath, 'utf8'),
            {
                columns: true,
                skipEmptyLines: true
            });

        return data;

    }
}