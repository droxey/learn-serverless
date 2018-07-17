import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

let data;

export const main = async event => {
  const params = {
    TableName: "notes",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  };

  try {
    data = await dynamoDbLib.call("query", params);
  } catch (err) {
    console.log(err);
    return failure({ status: false });
  }

  return success(data.Items);
};
