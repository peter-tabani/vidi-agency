// ============================================================================
// EMAIL SERVICE - Using EmailJS (Free tier: 200 emails/month)
// ============================================================================
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with these variables:
//    - {{from_name}} - Client's name
//    - {{from_email}} - Client's email
//    - {{phone}} - Client's phone
//    - {{company}} - Client's company
//    - {{service}} - Selected service
//    - {{features}} - List of features
//    - {{timeline}} - Delivery timeline
//    - {{total_price}} - Total quote amount
//    - {{message}} - Additional message
//    - {{timestamp}} - Submission time
// 4. Replace the IDs below with your actual EmailJS credentials
//
// ============================================================================

export interface QuoteData {
  contact: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
  service: string;
  features: string[];
  timeline: string;
  totalPrice: number;
  timestamp: string;
}

// EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL IDS
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // e.g., 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID',    // e.g., 'template_xyz789'
  publicKey: 'YOUR_PUBLIC_KEY',      // e.g., 'user_abcdefghijk'
};

/**
 * Send quote notification email using EmailJS
 * This works with static exports (no server required)
 */
export async function sendQuoteEmail(quoteData: QuoteData): Promise<boolean> {
  try {
    // Dynamically import EmailJS to avoid SSR issues
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: quoteData.contact.name,
      from_email: quoteData.contact.email,
      phone: quoteData.contact.phone,
      company: quoteData.contact.company || 'Not provided',
      service: quoteData.service,
      features: quoteData.features.join(', '),
      timeline: quoteData.timeline,
      total_price: `$${quoteData.totalPrice.toLocaleString()}`,
      message: quoteData.contact.message || 'No additional message',
      timestamp: new Date(quoteData.timestamp).toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

/**
 * Alternative: Send via Web3Forms (also free, no signup required for testing)
 * Get your access key at https://web3forms.com/
 */
export async function sendQuoteEmailWeb3Forms(
  quoteData: QuoteData,
  accessKey: string = 'YOUR_WEB3FORMS_ACCESS_KEY'
): Promise<boolean> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Project Quote Request - ${quoteData.service}`,
        from_name: quoteData.contact.name,
        email: quoteData.contact.email,
        phone: quoteData.contact.phone,
        company: quoteData.contact.company || 'Not provided',
        service: quoteData.service,
        features: quoteData.features.join(', '),
        timeline: quoteData.timeline,
        total_price: `$${quoteData.totalPrice.toLocaleString()}`,
        message: quoteData.contact.message || 'No additional message',
        timestamp: new Date(quoteData.timestamp).toLocaleString(),
      }),
    });

    const result = await response.json();
    console.log('Web3Forms response:', result);
    return result.success;
  } catch (error) {
    console.error('Failed to send email via Web3Forms:', error);
    return false;
  }
}

/**
 * Alternative: Send via Formspree
 * Get your form ID at https://formspree.io/
 */
export async function sendQuoteEmailFormspree(
  quoteData: QuoteData,
  formId: string = 'YOUR_FORMSPREE_ID'
): Promise<boolean> {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Project Quote Request - ${quoteData.service}`,
        name: quoteData.contact.name,
        email: quoteData.contact.email,
        phone: quoteData.contact.phone,
        company: quoteData.contact.company,
        service: quoteData.service,
        features: quoteData.features.join(', '),
        timeline: quoteData.timeline,
        totalPrice: `$${quoteData.totalPrice.toLocaleString()}`,
        message: quoteData.contact.message,
        timestamp: quoteData.timestamp,
      }),
    });

    const result = await response.json();
    console.log('Formspree response:', result);
    return response.ok;
  } catch (error) {
    console.error('Failed to send email via Formspree:', error);
    return false;
  }
}
