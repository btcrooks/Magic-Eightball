const responses = require('../data/responses');

const randomResponse = () => {
  const numberOfResponses = responses.length;
  const responseIndex = Math.floor(Math.random() * numberOfResponses);
  return responses[responseIndex];
}

exports.handler = async event => {
  return {
    statusCode: 200,
    body: randomResponse(),
  }
}
