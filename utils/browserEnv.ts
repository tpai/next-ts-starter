const variables = {
  API_HOST: process.env.API_HOST,
};

export default Object.entries(variables)
  .filter(([, value]) => typeof value !== 'undefined')
  .map(([name, value]) => `var ${name}='${value}'`)
  .join('; ');
