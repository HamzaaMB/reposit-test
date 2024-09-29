import fs from 'fs';
import csvParser from 'csv-parser';

/**
 * Reads a CSV file and returns its contents as an array of objects.
 *
 * @param {string} filePath - The path to the CSV file to be read.
 * @returns {Promise<T[]>} A promise that resolves to an array of objects of type T,
 *                         each representing a row in the CSV file.
 * 
 * The function uses a readable stream to read the CSV file and pipes it through the csv-parser.
 * It collects the parsed data in an array and resolves the promise once all data has been read.
 * In case of an error during reading, the promise is rejected.
 */
export function readCSV<T>(filePath: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data: T) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}
