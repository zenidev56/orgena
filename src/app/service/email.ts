const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses");
require('dotenv').config();

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_SES_REGION,
};

// Create SES service object.
const sesClient = new SESClient(SES_CONFIG);

const sendMail = async (templateName:string, recipientEmail:string,params:any) => {
  const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [
        recipientEmail
      ],
    },
    Source: process.env.AWS_SES_SENDER,
    Template: templateName,
    TemplateData: JSON.stringify(params),
  });

  try {
    const res = await sesClient.send(sendTemplatedEmailCommand);
  } catch (err) {
    console.error(err);
  }
}
export default sendMail;