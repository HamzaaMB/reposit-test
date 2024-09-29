import { Property } from '../models/Property';

/**
 * Validates postcodes of the given properties and returns a list of invalid postcodes.
 *
 * @param {Property[]} properties - An array of Property objects, each containing a postcode.
 * @returns {string[]} An array of Property IDs for properties that have invalid postcodes.
 * 
 * The function uses a regular expression to check if each property's postcode is valid. 
 * If a postcode is found to be invalid, its Property ID is logged and added to the array of 
 * invalid postcodes, which is returned at the end.
 */
export function validatePostcodes(properties: Property[]): string[] {
  const invalidPostcodes: string[] = [];
  const postcodeRegex = /^([A-Z]{1,2}[0-9]{1,2}[A-Z]?) ?([0-9]{1,5}[A-Z]{2})$/i; // Adjusted regex

  properties.forEach(property => {
    if (!postcodeRegex.test(property.postcode)) {
      console.log(`Invalid postcode found: ${property.postcode} for Property ID: ${property.id}`);
      invalidPostcodes.push(property.id);
    }
  });

  return invalidPostcodes;
}
