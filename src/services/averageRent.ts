import { Property } from '../models/Property';

/**
 * Calculates the average monthly rent for properties in a specified region.
 *
 * @param {Property[]} properties - An array of Property objects containing details 
 *                                  about each property, including their monthly rent.
 * @param {string} region - The region for which the average rent should be calculated.
 * 
 * @returns {number} The average monthly rent in pence, rounded to the nearest whole number.
 * 
 * @throws {Error} If no properties are found for the specified region.
 * 
 * The function first filters the properties to only include those in the given region. 
 * It then sums the monthly rents of these filtered properties and divides the total 
 * by the number of properties to compute the average. If no properties are found, 
 * an error is thrown to indicate the absence of data for the specified region.
 */
export function calculateAverageRentByRegion(properties: Property[], region: string): number {
  const filteredProperties = properties.filter(property => property.region === region);
  const totalRent = filteredProperties.reduce((sum, property) => sum + property.monthlyRentPence, 0);

  if (filteredProperties.length === 0) {
    throw new Error(`No properties found for region: ${region}`);
  }

  return Math.round(totalRent / filteredProperties.length);
}
