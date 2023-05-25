import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.2602621786184!2d18.02075517690551!3d59.34530327462196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9d263b022d%3A0x82fc0f30ed84f9ed!2sNackademin!5e0!3m2!1ssv!2sse!4v1685022854396!5m2!1ssv!2sse"
          width="100%"
          height="450"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="max-w-3xl mx-auto mt-8 flex flex-col lg:flex-row">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 lg:mb-0 lg:mr-4">
          <h2 className="text-2xl font-bold mb-4">About the Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, massa ac
            consectetur efficitur, arcu elit ultrices metus, sit amet congue nibh felis vel leo.
            Nulla in facilisis risus. Curabitur suscipit pretium tortor. Sed tincidunt, ipsum sed
            dapibus ultrices, odio arcu mollis ante, non bibendum leo dolor id enim. Fusce placerat
            enim in leo dictum, id fermentum ipsum consectetur.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mt-4">
            Email: <a href="mailto:info@manero.se">info@manero.se</a>
          </p>
          <p className="mt-4">Phone: +46-0736755933</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
