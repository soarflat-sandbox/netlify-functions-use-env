exports.handler = function(event, context, callback) {
  const { FAKE_TOKEN } = process.env;
  console.log(process.env);
  console.log(FAKE_TOKEN);
  // カスタムヘッダのないコールバック
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ token: FAKE_TOKEN }),
  });
};
