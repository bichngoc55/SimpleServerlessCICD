const {
  lambdaHandler
} = require('../src/app'); // thay đường dẫn nếu khác

describe('lambdaHandler', () => {
  test('should return 200 and Hello World message', async () => {
    const result = await lambdaHandler({}, {});

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body).toHaveProperty('message');
    expect(body.message).toBe("Hello World Omega333433!");
  });
});