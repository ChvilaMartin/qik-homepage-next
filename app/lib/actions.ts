"use server";

import { CreateWorkspaceInput, ContactFormInput } from "./schemas";
import { sendContactEmail } from "./email";

export async function createWorkspace(data: CreateWorkspaceInput): Promise<{ success: boolean; error?: string; workspaceUrl?: string }> {
  try {
    const host = process.env.QIK_APP_HOST;
    const authToken = process.env.QIK_APP_ADMIN_AUTH_TOKEN;

    if (!host || !authToken) {
      console.error("Missing environment variables: QIK_APP_HOST or QIK_APP_ADMIN_AUTH_TOKEN");
      return { success: false, error: "Chyba konfigurace serveru" };
    }

    const url = `${host}/api/administration/createWorkspace`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'administration-auth-token': authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
      return { success: false, error: `Chyba při vytváření pracoviště (${response.status})` };
    }

    // Construct workspace URL from slug, protocol and public domain
    const publicDomain = process.env.NEXT_PUBLIC_QIK_APP_PUBLIC;
    if (!publicDomain) {
      console.error("Missing NEXT_PUBLIC_QIK_APP_PUBLIC environment variable");
      return { success: false, error: "Chyba konfigurace serveru" };
    }
    const rawProtocol = process.env.NEXT_PUBLIC_QIK_APP_PUBLIC_PROTOCOL?.trim();
    const protocol = rawProtocol
      ? rawProtocol.replace("://", "").replace(/:$/, "")
      : "https";
    const workspaceUrl = `${protocol}://${data.workspace.slug}${publicDomain}`;

    return {
      success: true,
      workspaceUrl
    };

  } catch (error) {
    console.error("Error creating workspace:", error);
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, error: "Vytváření pracoviště trvá příliš dlouho. Zkuste to prosím znovu." };
    }
    return { success: false, error: "Chyba při vytváření pracoviště" };
  }
}

export async function checkWorkspaceAvailability(slug: string): Promise<{ exists: boolean; error?: string }> {
  try {
    if (!slug || slug.trim().length === 0) {
      return { exists: false };
    }

    const host = process.env.QIK_APP_HOST;
    const authToken = process.env.QIK_APP_ADMIN_AUTH_TOKEN;

    if (!host || !authToken) {
      console.error("Missing environment variables: QIK_APP_HOST or QIK_APP_ADMIN_AUTH_TOKEN");
      return { exists: false, error: "Chyba konfigurace serveru" };
    }

    const url = `${host}/api/administration/check/${encodeURIComponent(slug)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'administration-auth-token': authToken,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      console.error(`API request failed with status: ${response.status}`);
      return { exists: false, error: "Chyba při ověřování dostupnosti" };
    }

    const data = await response.json();
    return { exists: data.exists };

  } catch (error) {
    console.error("Error checking workspace availability:", error);
    return { exists: false, error: "Chyba při ověřování dostupnosti" };
  }
}

export async function submitContactForm(
  data: ContactFormInput
): Promise<{ success: boolean; error?: string }> {
  try {
    const result = await sendContactEmail(
      data.name,
      data.email,
      data.question
    );
    return result;
  } catch (error) {
    console.error("Error in submitContactForm:", error);
    return {
      success: false,
      error: "Chyba při zpracování formuláře. Zkuste to prosím znovu."
    };
  }
}
