import { Property } from '../models/Property';
import { Tenant } from '../models/Tenant';

/**
 * Filters properties based on tenants' budgets.
 *
 * @param {Property[]} properties - An array of Property objects to be filtered.
 * @param {Tenant[]} tenants - An array of Tenant objects whose budgets will be used for filtering.
 * @returns {Property[]} An array of Property objects that are affordable to at least one tenant.
 * 
 * The function checks each property to see if any tenant's budget can cover the 
 * property's monthly rent. Only properties that meet this criterion are included in 
 * the returned array.
 */
function filterProperties(properties: Property[], tenants: Tenant[]): Property[] {
  return properties.filter(property =>
    tenants.some(tenant =>
      tenant.budgetPence >= property.monthlyRentPence
    )
  );
}

export { filterProperties };
