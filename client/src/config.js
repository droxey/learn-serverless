export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-1",
    BUCKET: "droxey-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-1",
    URL: "https://7ynfo3o329.execute-api.us-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ojRRPPMWG",
    APP_CLIENT_ID: "53g6nd7bnuod6d8n5cfr3p9hr6",
    IDENTITY_POOL_ID: "us-west-2:80c8fea0-a098-4ee9-9131-062f1c7c2be7"
  }
};
