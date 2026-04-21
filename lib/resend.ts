import { Resend } from "resend";

function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(key);
}

const TO_EMAIL = process.env.CONTACT_EMAIL || "Saddlemt@atiaz.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@saddlemountainrv.com";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const resend = getResendClient();
  return resend.emails.send({
    from: `Saddle Mountain RV <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form: ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}

Message:
${data.message}
    `.trim(),
  });
}

export async function sendReservationEmail(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  rvType: string;
  ageOfResidents?: string;
  ageOfRv: string;
  numberOfPets?: string;
  numberOfPeople?: string;
  specialRequests?: string;
}) {
  const resend = getResendClient();
  return resend.emails.send({
    from: `Saddle Mountain RV <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New Reservation Request: ${data.firstName} ${data.lastName}`,
    text: `
RESERVATION REQUEST
====================

Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}

Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
RV Type: ${data.rvType}
Age of RV: ${data.ageOfRv}
Age of Residents: ${data.ageOfResidents || "Not provided"}
Number of Pets: ${data.numberOfPets || "0"}
Number of People: ${data.numberOfPeople || "Not provided"}

Special Requests:
${data.specialRequests || "None"}
    `.trim(),
  });
}
