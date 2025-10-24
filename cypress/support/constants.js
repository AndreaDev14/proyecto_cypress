const nodeEnvironmentVariables = Cypress.env('NODE_ENV') ?? {};

const knownVariables = [
  "LOCATION",
  "CYPRESS_USER_EMAIL",
  "CYPRESS_USER_PASSWORD",

]

/**
 * @typedef {Object} Constants
 * @property {string} LOCATION - The location of the Pepper application.
 * @property {string} CYPRESS_USER_EMAIL - Username that will login into the app.
 * @property {string} CYPRESS_USER_PASSWORD - Password of the given user.

 */

/**
 * @type {Constants}
 * @description Contains all the environment variables required for the tests to run
*/
const Constants = {};

knownVariables.forEach((variableKey) => {
  const value = nodeEnvironmentVariables[variableKey]
  if (!value) {
    throw new Error(`Environment variable: ${variableKey}, is not set`)
  }

  Object.defineProperty(Constants, variableKey, {
    value,
    writable: false,
    enumerable: true,
    configurable: false
  })
})

export default Constants