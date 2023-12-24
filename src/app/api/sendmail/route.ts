import { NextResponse } from 'next/server';

const AWS = require("aws-sdk");

export default async function POST(request: { json: () => PromiseLike<{ name: any; email: any; condition: any; treatment: any; message: any; }> | { name: any; email: any; condition: any; treatment: any; message: any; phone: any; }; }) {
  try {
    const { name, email, condition, treatment, message, phone } = await request.json();
  require('dotenv').config()
  var params = {
    Destination: { /* required */
      CcAddresses: [
        'pawarjulie2@gmail.com',
        /* more items */
      ],
      ToAddresses: [
        'pawarjulie2@gmail.com',
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Html: {
         Charset: "UTF-8",
         Data: `
         <html lang="en">
         <head>
           <meta charset="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>You got a New Patient's Request</title>
           <style>
             /* Add your custom CSS styles here */
             body {
                 font-family: Arial, sans-serif;
                 background-color: #f4f4f4;
                 margin: 0;
                 padding: 0;
             }
             .container {
                 max-width: 600px;
                 margin: 0 auto;
                 padding: 20px;
                 background-color: #ffffff;
             }
             h1 {
                 color: #333;
             }
             p {
                 color: #666;
             }
           </style>
         </head>
         <body>
           <div class="container">
             <h1>Hi Dr Julie Pawar</h1>
             <p>
               My name is ${name} and I have this condition ${condition}. I am
               looking for this treatment ${treatment}
             </p>
       
             <br />
             <br />
             <h3>${name} Personal Message</h3>
             <p>${message}</p>
       
             <h4>${name} Contact info</h4>
             <p> ${phone} </p>
             <p> ${email} </p>
             
       
             <p>Best Regards,<br />Care Physiotherapy</p>
           </div>
         </body>
       </html>
         `
        },
        Text: {
         Charset: "UTF-8",
         Data: "Hi Hitesh here"
        }
       },
       Subject: {
        Charset: 'UTF-8',
        Data: "You got a New Patient's Contact request"
       }
      },
    Source: 'pawarjulie2@gmail.com', /* required */
    ReplyToAddresses: [
       'pawarjulie2@gmail.com',
      /* more items */
    ],
  };
  AWS.config.update({region: 'ap-south-1'});

  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
  return NextResponse.json(
    { message: "Email Sent Successfully", data: sendPromise },
    { status: 200 },
  );

  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 },
    );
  }
}
