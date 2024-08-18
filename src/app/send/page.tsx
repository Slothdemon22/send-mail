
'use client'
import React from "react";

// Define the component type using React.FC
const send = () => {
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
    }
    return <>
    
    <div onClick={() => sendEmail()} className="text-3xl h-screen w-full  flex justify-center items-center">Send</div>
    
    </>;
}

export default send;
