import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Type definition for form data
type FormData = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: FormData = await req.json();
    const { first_name, last_name, phone, email, message } = body;

    if (!first_name || !last_name || !phone || !email || !message) {
      return NextResponse.json({ message: "Please fill in all fields" }, { status: 400 });
    }

    console.log("Received form data:", body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${first_name} ${last_name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
