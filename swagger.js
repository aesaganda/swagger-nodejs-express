const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/endpoints.js'];

swaggerAutogen(outputFile, endpointsFiles);