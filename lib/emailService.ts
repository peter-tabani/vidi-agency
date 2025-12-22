// ============================================================================
// EMAIL SERVICE - Using EmailJS
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

// lib/emailService.ts

const EMAILJS_CONFIG = {
  serviceId: 'service_npei2gf',       // Your Service ID (from your logs)
  templateId: 'template_2u2lhr9',     // The VALID ID from your screenshot
  publicKey: '-IObU0502rQ2VlNHa',     // Your Key (lowercase 'l')
};

/**
 * Send quote notification email using EmailJS
 */
export async function sendQuoteEmail(quoteData: QuoteData): Promise<boolean> {
  try {
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