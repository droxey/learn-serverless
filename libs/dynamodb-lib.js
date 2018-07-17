// NOTE: In order to run this and get around UnauthorizedClientException:
// 1. The user who accesses this must be an IAM user with `AmazonDynamoDBFullAccess` permissions.
// 2. Additionally, set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to the above IAM user's credentials
// in .env.yml for the aformentioned IAM user.
// 3. Double check the right region is selected for your DynamoDB table.
// 4. Test by executing: `serverless invoke local --function create --path mocks/create-event.json`

import AWS from "aws-sdk";

AWS.config.update({ region: "us-west-1" });

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({
    convertEmptyValues: true
  });
  return dynamoDb[action](params).promise();
}
