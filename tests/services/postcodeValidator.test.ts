import { Property, validatePostcodes } from '../../src/index';

const properties: Property[] = [
  { id: 'p_1001', address: '11 Fielding Road', postcode: 'FK71 6GH', monthlyRentPence: 120000, region: 'N.IRELAND', capacity: 3, tenancyEndDate: '2024-07-01' },
  { id: 'p_1002', address: '22 Main Street', postcode: 'INVALID_CODE', monthlyRentPence: 150000, region: 'N.IRELAND', capacity: 4, tenancyEndDate: '2024-08-01' }
];

describe('Postcode Validation', () => {
  it('should return a list of property IDs with invalid postcodes', () => {
    const invalidIds = validatePostcodes(properties);
    expect(invalidIds).toEqual(['p_1002']);
  });

  it('should return an empty list if all postcodes are valid', () => {
    const validProperties: Property[] = [
      { id: 'p_1001', address: 'Address 1', postcode: 'AB12 3CD', monthlyRentPence: 120000, region: 'N.IRELAND', capacity: 3, tenancyEndDate: '2024-05-01' }
    ];
    const invalidIds = validatePostcodes(validProperties);
    expect(invalidIds).toEqual([]);
  });
});
