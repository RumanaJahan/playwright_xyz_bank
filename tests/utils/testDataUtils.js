// -------------------------------------------------------------------------------------------------
// Utility: Generates random customer data for use in add customer tests
// -------------------------------------------------------------------------------------------------

export function generateRandomCustomerData() {
  const id = Math.floor(Math.random() * 1000);
  return {
    firstName: `rumana${id}`,
    lastName: `jahan${id}`,
    postCode: `${id}XYZ`,
  };
}
