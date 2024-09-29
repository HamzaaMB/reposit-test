import { Property, calculateAverageRentByRegion } from '../../src/index'

const properties: Property[] = [
  { id: 'p_1001', address: 'Address 1', postcode: 'AB12 3CD', monthlyRentPence: 120000, region: 'N.IRELAND', capacity: 3, tenancyEndDate: '2024-05-01' },
  { id: 'p_1002', address: 'Address 2', postcode: 'EF45 6GH', monthlyRentPence: 150000, region: 'N.IRELAND', capacity: 2, tenancyEndDate: '2024-06-01' },
  { id: 'p_1003', address: 'Address 3', postcode: 'IJ78 9KL', monthlyRentPence: 180000, region: 'SCOTLAND', capacity: 1, tenancyEndDate: '2024-07-01' }
];

describe('Average Rent Calculation', () => {
  it('should calculate the average rent for a given region', () => {
    const averageRent = calculateAverageRentByRegion(properties, 'N.IRELAND');
    expect(averageRent).toBe(135000);
  });

  it('should throw an error if no properties found for the region', () => {
    expect(() => calculateAverageRentByRegion(properties, 'UNKNOWN')).toThrow('No properties found for region: UNKNOWN');
  });
});
