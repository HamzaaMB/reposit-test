export { Property } from './models/Property'
export { Tenant } from './models/Tenant'

export { calculateAverageRentByRegion } from './services/averageRent';
export { readCSV } from './services/csvReader';
export { formatOutput } from './services/outputFormatter';
export { validatePostcodes } from './services/postcodeValidator';
export { filterProperties } from './services/propertyFilter';
export { getPropertyStatus } from './services/propertyStatus';
export { calculateRentPerTenant } from './services/rentPerTenant'; 
