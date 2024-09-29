import { Property } from '../models/Property';
import { Tenant } from '../models/Tenant';

/**
 * Determines the current status of a property based on tenant occupancy and tenancy dates.
 *
 * @param {Property} property - The Property object for which to determine the status.
 * @param {Tenant[]} tenants - An array of Tenant objects associated with the property.
 * @returns {string} A string representing the current status of the property:
 *                   - 'PROPERTY_VACANT' if there are no tenants,
 *                   - 'PARTIALLY_VACANT' if there are tenants but the property is not fully occupied,
 *                   - 'PROPERTY_ACTIVE' if the property is fully occupied,
 *                   - 'PROPERTY_OVERDUE' if the tenancy has ended,
 *                   - 'UNKNOWN_STATUS' if the status cannot be determined.
 * 
 * The function compares the number of tenants to the property capacity and checks 
 * the current date against the tenancy end date to classify the property status.
 */
export function getPropertyStatus(property: Property, tenants: Tenant[]): string {
  const today = new Date();
  const tenancyEndDate = new Date(property.tenancyEndDate);

  if (tenants.length === 0) {
    return 'PROPERTY_VACANT';
  } else if (tenants.length < property.capacity && today <= tenancyEndDate) {
    return 'PARTIALLY_VACANT';
  } else if (tenants.length === property.capacity && today <= tenancyEndDate) {
    return 'PROPERTY_ACTIVE';
  } else if (today > tenancyEndDate) {
    return 'PROPERTY_OVERDUE';
  }

  return 'UNKNOWN_STATUS';
}
