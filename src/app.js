exports.lambdaHandler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World Omega33333!",
      }),
      //  i love tiktok
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: err,
      }),
    };
  }
};
