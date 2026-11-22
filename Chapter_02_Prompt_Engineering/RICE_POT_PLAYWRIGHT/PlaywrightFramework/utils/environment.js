const credentialVariables = Object.freeze([
  'SALESFORCE_USERNAME',
  'SALESFORCE_PASSWORD',
  'SALESFORCE_INVALID_USERNAME',
  'SALESFORCE_INVALID_PASSWORD'
]);

export function getMissingEnvironmentVariables(names = credentialVariables) {
  return names.filter((name) => {
    const value = process.env[name];
    return typeof value !== 'string' || value.trim().length === 0;
  });
}

export function getCredentials(names) {
  const missing = getMissingEnvironmentVariables(names);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  return Object.fromEntries(names.map((name) => [name, process.env[name]]));
}
