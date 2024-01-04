const util = require('util');
require('dotenv').config();
const { AccruClient } = require('accru-client'); // Import the services from your SDK
const { getAuthToken } = require('./testAuth');

function deepLog(obj) {
  console.log(util.inspect(obj, false, null, true));
}

async function createAccruClient() {
  const token = await getAuthToken();
  return new AccruClient({
    token,
    baseUrl: process.env.BACKEND_GRAPHQL_ENDPOINT,
  });
}

async function sandbox() {
  try {
    const accruClient = await createAccruClient();
    const userData = await accruClient.users.getCurrent();
    const organizationId = userData.organizations[0].organization_id;

    await testCustomersGet({
      organizationId,
      accruClient,
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

async function testCustomersGet({ accruClient, organizationId }) {
  const customerData = await accruClient.customers.get({
    organizationId,
  });
  deepLog(customerData);
}

// Call the main function to initiate API calls
sandbox();
