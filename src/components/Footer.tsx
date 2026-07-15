import { Facebook } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onPrivacyClick, onTermsClick, onContactClick }: FooterProps) {
  return (
    <footer className="h-[60px] bg-white border-t border-[#eee] flex items-center justify-between px-10 text-[13px] text-[#888]">
      <div>&copy; ২০২৬ ফানি স্ক্রিনশট। তৈরি করেছেন আপনার প্রিয় কম্পিউটার শিক্ষক।</div>
      <div className="flex gap-4">
        <button onClick={onPrivacyClick} className="hover:text-blue-600">Privacy</button>
        <button onClick={onTermsClick} className="hover:text-blue-600">Terms</button>
        <button onClick={onContactClick} className="hover:text-blue-600">Contact</button>
      </div>
    </footer>
  );
}
