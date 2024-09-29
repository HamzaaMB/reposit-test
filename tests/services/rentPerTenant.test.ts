import { Property, Tenant, calculateRentPerTenant } from '../../src/index';

const property: Property = {
  id: 'p_1001',
  address: '11 Fielding Road',
  postcode: 'FK71 6GH',
  monthlyRentPence: 120000,
  region: 'N.IRELAND',
  capacity: 3,
  tenancyEndDate: '2024-07-01'
};

const tenants: Tenant[] = [
  { id: 't_1001', propertyId: 'p_1001', name: 'Alice', age: 30, budgetPence: 130000 },
  { id: 't_1002', propertyId: 'p_1001', name: 'Bob', age: 25, budgetPence: 150000 }
];

describe('Rent Per Tenant Calculation', () => {
  it('should calculate rent per tenant in pence', () => {
    const rentPerTenant = calculateRentPerTenant(property, tenants);
    expect(rentPerTenant).toBe(60000);
  });

  it('should calculate rent per tenant in pounds', () => {
    const rentPerTenant = calculateRentPerTenant(property, tenants, true);
    expect(rentPerTenant).toBe(600);
  });

  it('should throw an error if there are no tenants', () => {
    expect(() => calculateRentPerTenant(property, [])).toThrow('No tenants available for this property');
  });
});
