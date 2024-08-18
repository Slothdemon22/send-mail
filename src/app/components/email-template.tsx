import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => {
  const sendEmail = async () => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
      });

      const result = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        console.error(result.error);
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <button onClick={sendEmail}>Send Welcome Email</button>
    </div>
  );
};
