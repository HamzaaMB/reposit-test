import { Property } from '../models/Property';

/**
 * Formats an array of Property objects into a user-friendly output.
 *
 * @param {Property[]} properties - An array of Property objects containing details 
 *                                  about each property.
 * @returns {string[]} An array of formatted strings, each representing a property with its ID, 
 *                     address, and monthly rent in pounds.
 * 
 * The function maps over the properties and converts the monthly rent from pence to pounds,
 * formatting the output string to include relevant details for display purposes.
 */
export function formatOutput(properties: Property[]): string[] {
  return properties.map(property => {
    const rentInPounds = (property.monthlyRentPence / 100).toFixed(2);
    return `Property ID: ${property.id}, Address: ${property.address}, Monthly Rent: £${rentInPounds}`;
  });
}
