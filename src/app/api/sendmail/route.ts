import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: { json: () => PromiseLike<{ name: any; email: any; condition: any; treatment: any; message: any; }> | { name: any; email: any; condition: any; treatment: any; message: any; }; }) {
  // try {
  //   const { name, email, condition, treatment, message } = await request.json();
  //   require('dotenv').config()
  
  // let nodemailer = require('nodemailer')
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "smtp.gmail.com",
  //   auth: {
  //     user: '',
  //     pass: process.env.password,
  //   },
  //   secure: true,
  // })
  // const mailData = {
  //   from: 'demo email',
  //   to: 'your email',
  //   subject: `Message From ${name}`,
  //   text: message + " | Sent from: " + email,
  //        html: `
  //       <li> Hello: ${name}</li>
  //       <li> This is my email: ${email}</li> 
  //       <li> I have this condition: ${condition}</li> 
  //       <li> I want this treatment: ${treatment}</li> 
  //       <li> message: ${message}</li> 
  //       `,
  // }
  // transporter.sendMail(mailData, function (err, info) {
  //   if(err)
  //     console.log(err)
  //   else
  //     console.log(info)
  // })
    // console.log({ name, email, condition, treatment, message })
    // const transporter = nodemailer.createTransport({
    //   host: "live.smtp.mailtrap.io",
    //   port: 587,
    //   secure: true,
    //   auth: {
    //     user: "api",
    //     pass: "4763a5c3ae4f6ddb70f7ec5918e3a520",
    //   },
    // });

    // const mailOption = {
    //   from: "careeros@tryporpra.com",
    //   to: "augustinerepos@gmail.com",
    //   subject: "Send Email Tutorial",
    //   html: `
    //     <li> Hello: ${name}</li>
    //     <li> This is my email: ${email}</li> 
    //     <li> I have this condition: ${condition}</li> 
    //     <li> I want this treatment: ${treatment}</li> 
    //     <li> message: ${message}</li> 
    //     `,
    // };

    // const response = await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error:any) {
    console.log({error: error.message})
    return NextResponse.json(
      // { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
