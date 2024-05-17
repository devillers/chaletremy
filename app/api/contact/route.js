import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email, // Email address of the form submitter
    to: process.env.RECIPIENT_EMAIL, // Your recipient email address
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending message' }), {
      status: 500,
    });
  }
}
