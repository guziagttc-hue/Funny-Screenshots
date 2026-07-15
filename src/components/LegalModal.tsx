interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      body: (
        <div className="space-y-4">
          <p>Funny Screenshots is committed to protecting your privacy. This privacy policy describes the types of personal information that we collect, how we use it, and how we protect it.</p>
          <p>We collect personal information such as your name, email address, and IP address when you interact with our website. We use this information to provide you with the best possible experience, to communicate with you, and to improve our website.</p>
          <p>We do not share your personal information with third parties without your consent, except as required by law. We take all reasonable steps to protect your personal information from unauthorized access, use, or disclosure.</p>
          <p>You have the right to access, correct, or delete your personal information that we have collected. You also have the right to withdraw your consent to our use of your personal information.</p>
          <p>If you have any questions or concerns about our privacy policy, please contact us at [your email address].</p>
        </div>
      )
    },
    terms: {
      title: 'Terms of Use',
      body: (
        <div className="space-y-4">
          <p>By accessing and using this website, you agree to abide by the following terms and conditions:</p>
          <ul className="list-disc pl-5">
            <li>The content of this website is for informational purposes only.</li>
            <li>You are responsible for your own use of this website.</li>
            <li>You agree not to use this website for any unlawful or prohibited purpose.</li>
            <li>We reserve the right to change these terms of use at any time.</li>
          </ul>
          <p>If you do not agree to these terms, please do not use this website.</p>
        </div>
      )
    },
    contact: {
      title: 'Contact Us',
      body: (
        <div className="space-y-4">
          <p>If you have any questions or comments, please feel free to contact us:</p>
          <p>By email: [your email address]<br />
          By phone: [your phone number]<br />
          By mail: [your mailing address]</p>
          <p>We look forward to hearing from you!</p>
        </div>
      )
    }
  };

  const { title, body } = content[type];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[2000]">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">Close</button>
        </div>
        {body}
      </div>
    </div>
  );
}
