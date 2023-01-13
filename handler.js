'use strict';

module.exports.createCustomer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'createCustomer',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.searchCustomer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'searchCustomer',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.updateCustomer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'updateCustomer',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.deleteCustomer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'deleteCustomer',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
