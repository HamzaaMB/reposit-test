import * as fs from 'fs';
import { Property, readCSV } from '../../src/index'

jest.mock('fs');

describe('CSV Reader', () => {
  it('should read a CSV file and return parsed data', async () => {
    const mockData: Property[] = [
      {
        id: 'p_1002',
        address: '11 Fielding Road',
        postcode: 'FK71 6GH',
        monthlyRentPence: 158800,
        region: 'N.IRELAND',
        capacity: 4,
        tenancyEndDate: '2024-07-01'
      }
    ];

    const mockStream: any = {
      pipe: jest.fn().mockReturnThis(),
      on: jest.fn((event: string, callback: (data?: Property) => void) => {
        if (event === 'data') {
          mockData.forEach(item => callback(item));
        }
        if (event === 'end') {
          callback();
        }
        return mockStream;
      })
    };

    (fs.createReadStream as jest.Mock).mockReturnValue(mockStream);

    const result = await readCSV<Property>('test.csv');
    expect(result).toEqual(mockData);
  });

  it('should handle errors when reading CSV files', async () => {
    (fs.createReadStream as jest.Mock).mockImplementationOnce(() => {
      throw new Error('File not found');
    });

    await expect(readCSV<Property>('invalid.csv')).rejects.toThrow('File not found');
  });
});
