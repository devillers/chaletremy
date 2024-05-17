import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('Request received:', req.method); // Log the request method

  if (req.method === 'POST') {
    const body = await req.json();
    const { name, email, message } = body;

    console.log('Request body:', body); // Log the request body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission</p><p><strong>Name: </strong> ${name}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p>`,
      });

      console.log('Email sent successfully'); // Log success
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Failed to send email:', error); // Log the error
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
