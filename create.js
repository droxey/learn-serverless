import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

let data;

export const main = async event => {
  const eventData = JSON.parse(event.body);
  const params = {
    TableName: "note",
    Item: {
      noteId: uuid.v1(),
      userId: event.requestContext.identity.cognitoIdentityId,
      content: eventData.content,
      attachment: eventData.attachment,
      createdAt: Date.now()
    }
  };

  try {
    data = await dynamoDbLib.call("put", params);
  } catch (err) {
    console.log(err);
    return failure({ status: false });
  }

  return success(data.Items);
};
