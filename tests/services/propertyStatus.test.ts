import { Property, Tenant, getPropertyStatus } from '../../src/index';

const property: Property = {
  id: 'p_1001',
  address: '11 Fielding Road',
  postcode: 'FK71 6GH',
  monthlyRentPence: 120000,
  region: 'N.IRELAND',
  capacity: 2,
  tenancyEndDate: '2025-12-01'
};

const tenants: Tenant[] = [
  { id: 't_1001', propertyId: 'p_1001', name: 'Alice', age: 30, budgetPence: 130000 },
  { id: 't_1002', propertyId: 'p_1001', name: 'Bob', age: 25, budgetPence: 150000 }
];

describe('Property Status', () => {
  it('should return PROPERTY_ACTIVE if all tenants are present', () => {
    const status = getPropertyStatus(property, tenants);
    expect(status).toBe('PROPERTY_ACTIVE');
  });

  it('should return PROPERTY_VACANT if no tenants are present', () => {
    const status = getPropertyStatus(property, []);
    expect(status).toBe('PROPERTY_VACANT');
  });

  it('should return PARTIALLY_VACANT if some tenants are present', () => {
    const partialTenants: Tenant[] = [
      { id: 't_1001', propertyId: 'p_1001', name: 'Alice', age: 30, budgetPence: 130000 }
    ];
    const status = getPropertyStatus(property, partialTenants);
    expect(status).toBe('PARTIALLY_VACANT');
  });

  it('should return PROPERTY_OVERDUE if tenancy end date has passed', () => {
    const overdueProperty: Property = { ...property, tenancyEndDate: '2022-01-01' };
    const status = getPropertyStatus(overdueProperty, tenants);
    expect(status).toBe('PROPERTY_OVERDUE');
  });
});
