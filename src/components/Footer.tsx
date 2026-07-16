import { Facebook } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onContactClick: () => void;
  language: 'bn' | 'en';
  t: any;
}

export default function Footer({ onPrivacyClick, onTermsClick, onContactClick, language, t }: FooterProps) {
  return (
    <footer className="h-[60px] bg-white dark:bg-[#2d2d2d] border-t border-[#eee] dark:border-gray-700 flex items-center justify-between px-10 text-[13px] text-[#888] dark:text-gray-400 transition-colors duration-300">
      <div>&copy; {t.footerCopyright}</div>
      <div className="flex gap-4 items-center">
        <a href="https://www.facebook.com/share/p/1D27GThZsj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400"><Facebook size={18} /></a>
        <button onClick={onPrivacyClick} className="hover:text-blue-600 dark:hover:text-blue-400">{t.privacy}</button>
        <button onClick={onTermsClick} className="hover:text-blue-600 dark:hover:text-blue-400">{t.terms}</button>
        <button onClick={onContactClick} className="hover:text-blue-600 dark:hover:text-blue-400">{t.contact}</button>
      </div>
    </footer>
  );
}
