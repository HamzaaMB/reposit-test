import { Property, formatOutput } from '../../src/index';

describe('Output Formatter', () => {
  const properties: Property[] = [
    { id: 'p_1002', address: '11 Fielding Road', postcode: 'FK71 6GH', monthlyRentPence: 158800, region: 'N.IRELAND', capacity: 4, tenancyEndDate: '2024-07-01' },
    { id: 'p_1003', address: '120 Hazelwood Street', postcode: 'IV78 9QR', monthlyRentPence: 123600, region: 'N.IRELAND', capacity: 3, tenancyEndDate: '2029-09-13' },
  ];

  it('should format output correctly', () => {
    const output = formatOutput(properties);
    expect(output).toEqual([
      'Property ID: p_1002, Address: 11 Fielding Road, Monthly Rent: £1588.00',
      'Property ID: p_1003, Address: 120 Hazelwood Street, Monthly Rent: £1236.00'
    ]);
  });
});
