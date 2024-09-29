import { Property } from '../models/Property';
import { Tenant } from '../models/Tenant';

/**
 * Calculates the rent per tenant for a given property.
 *
 * @param {Property} property - The Property object for which to calculate rent per tenant.
 * @param {Tenant[]} tenants - An array of Tenant objects occupying the property.
 * @param {boolean} [inPounds=false] - Optional flag to return the rent per tenant in pounds 
 *                                      instead of pence.
 * @returns {number} The calculated rent per tenant in pence (or pounds if the flag is true).
 * 
 * The function divides the property's monthly rent by the number of tenants. 
 * If no tenants are available, an error is thrown to indicate the lack of data.
 */
export function calculateRentPerTenant(property: Property, tenants: Tenant[], inPounds: boolean = false): number {
  if (tenants.length === 0) {
    throw new Error('No tenants available for this property');
  }

  const rentPerTenant = property.monthlyRentPence / tenants.length;
  return inPounds ? rentPerTenant / 100 : rentPerTenant;
}
