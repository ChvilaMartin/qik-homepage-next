"use server";

import * as postmark from "postmark";

export async function sendContactEmail(
  name: string,
  email: string,
  question: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const apiKey = process.env.POSTMARK_API_KEY;
    const receiver = process.env.EMAIL_SENDER;
    const to = process.env.EMAIL_TO;

    if (!apiKey || !receiver) {
      console.error("Missing environment variables: POSTMARK_API_KEY or EMAIL_SENDER");
      return { success: false, error: "Chyba konfigurace serveru" };
    }

    const client = new postmark.ServerClient(apiKey);

    await client.sendEmail({
      From: receiver, // Must be verified sender in Postmark
      To: to || receiver,
      ReplyTo: email, // User's email for easy replies
      Subject: `Nový dotaz z kontaktního formuláře - ${name}`,
      HtmlBody: `
        <h2>Nový dotaz z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${escapeHtml(question).replace(/\n/g, '<br>')}</p>
      `,
      TextBody: `
Nový dotaz z kontaktního formuláře

Jméno: ${name}
Email: ${email}

Zpráva:
${question}
      `,
      MessageStream: "outbound"
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      error: "Chyba při odesílání zprávy. Zkuste to prosím znovu."
    };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
