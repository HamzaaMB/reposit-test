import { Property, Tenant, filterProperties } from '../../src/index';

const properties: Property[] = [
  { id: 'p_1001', address: '120 Hazelwood Street', postcode: 'IV78 9QR', monthlyRentPence: 123600, region: 'SCOTLAND', capacity: 3, tenancyEndDate: '2024-05-01' },
  { id: 'p_1002', address: '11 Fielding Road', postcode: 'FK71 6GH', monthlyRentPence: 158800, region: 'SCOTLAND', capacity: 4, tenancyEndDate: '2024-06-01' },
  { id: 'p_1003', address: '22 Main Street', postcode: 'XY12 3AB', monthlyRentPence: 90000, region: 'SCOTLAND', capacity: 2, tenancyEndDate: '2024-04-01' }
];

const tenants: Tenant[] = [
  { id: 't_1001', propertyId: 'p_1001', name: 'Alice', age: 30, budgetPence: 130000 },
  { id: 't_1002', propertyId: 'p_1002', name: 'Bob', age: 25, budgetPence: 150000 },
  { id: 't_1003', propertyId: 'p_1003', name: 'Charlie', age: 28, budgetPence: 100000 }
];

describe('Property Filter', () => {
  it('should filter properties based on tenant budget', () => {
    const availableProperties = filterProperties(properties, tenants);
    expect(availableProperties).toEqual([properties[0], properties[2]]);
  });

  it('should return all properties if they are affordable for all tenants', () => {
    const tenantsWithHighBudget: Tenant[] = [
      { id: 't_1001', propertyId: 'p_1001', name: 'Alice', age: 30, budgetPence: 200000 }
    ];

    const availableProperties = filterProperties(properties, tenantsWithHighBudget);
    expect(availableProperties).toEqual(properties);
  });
});
