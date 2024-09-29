import { Property, Tenant, readCSV, calculateAverageRentByRegion, calculateRentPerTenant, validatePostcodes, getPropertyStatus } from '../../src/index'

describe('Integration Tests', () => {
  let properties: Property[] = [];
  let tenants: Tenant[] = [];

  beforeAll(async () => {
    properties = await readCSV<Property>('properties.csv');
    tenants = await readCSV<Tenant>('tenants.csv');
  });

  test('Should calculate average rent by region', () => {
    const region = 'N.IRELAND';
    const averageRent = calculateAverageRentByRegion(properties, region);
    expect(averageRent).toBeGreaterThan(0);
  });

  test.only('Should validate postcodes and return invalid ones', () => {
    const invalidPostcodes = validatePostcodes(properties);
    console.log(invalidPostcodes)
    expect(invalidPostcodes.length).toBe(3);
  });

  test('Should calculate rent per tenant for a specific property', () => {
    const property = properties[0];
    const propertyTenants = tenants.filter(tenant => tenant.propertyId === property.id);
    const rentPerTenantPounds = calculateRentPerTenant(property, propertyTenants, true);
    expect(rentPerTenantPounds).toBeGreaterThan(0);
  });

  test('Should determine property status', () => {
    const property = properties[0];
    const propertyTenants = tenants.filter(tenant => tenant.propertyId === property.id);
    const status = getPropertyStatus(property, propertyTenants);

    expect(['PROPERTY_VACANT', 'PARTIALLY_VACANT', 'PROPERTY_ACTIVE', 'PROPERTY_OVERDUE']).toContain(status);
  });
});
